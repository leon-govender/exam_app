"""Render PDF pages to PNG images for visual reading.

Why this exists: some PDFs (including DBE past-paper PDFs and mirrors of
them) have a broken or obfuscated text layer — pdftotext/most text
extractors produce garbled output even though the page displays correctly.
Rendering to an image and reading it visually (e.g. via Claude's Read tool)
sidesteps that entirely, since it doesn't depend on the text layer at all.

One-time setup:
    python -m pip install pymupdf

Usage:
    python scripts/pdf_to_images.py <pdf_path> <output_dir> <pages>

    <pages> is 1-indexed, e.g. "1-3" or "1,2,5" or "1-3,7"

Example:
    python scripts/pdf_to_images.py geography-2023-p1.pdf ./out 1-6
"""

import sys

import fitz  # PyMuPDF


def parse_pages(spec: str) -> set[int]:
    pages: set[int] = set()
    for part in spec.split(","):
        if "-" in part:
            a, b = part.split("-")
            pages.update(range(int(a), int(b) + 1))
        else:
            pages.add(int(part))
    return pages


def main() -> None:
    pdf_path, out_dir, pages_spec = sys.argv[1], sys.argv[2], sys.argv[3]
    pages = parse_pages(pages_spec)

    doc = fitz.open(pdf_path)
    print(f"Total pages in doc: {doc.page_count}")
    for p in sorted(pages):
        if p < 1 or p > doc.page_count:
            print(f"Skipping page {p} (out of range)")
            continue
        page = doc[p - 1]
        pix = page.get_pixmap(matrix=fitz.Matrix(2.2, 2.2))  # ~220 DPI
        out_path = f"{out_dir}/page_{p}.png"
        pix.save(out_path)
        print(f"Saved {out_path}")


if __name__ == "__main__":
    main()
