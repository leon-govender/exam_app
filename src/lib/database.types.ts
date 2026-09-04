// Hand-written to match supabase/migrations/0001_init.sql.
// If the schema changes, update this alongside the migration.
// Shape follows the official `supabase gen types typescript` output so the
// supabase-js generics resolve correctly (Relationships/Views/Functions/etc
// must all be present even if empty, or query results type as `never`).

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

export interface Database {
  public: {
    Tables: {
      subjects: {
        Row: { id: string; name: string; stream: string | null; created_at: string };
        Insert: { id?: string; name: string; stream?: string | null; created_at?: string };
        Update: { id?: string; name?: string; stream?: string | null; created_at?: string };
        Relationships: [];
      };
      papers: {
        Row: {
          id: string;
          subject_id: string;
          year: number;
          exam_diet: string;
          paper_number: string;
          duration_minutes: number;
          total_marks: number;
          source_url: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          subject_id: string;
          year: number;
          exam_diet: string;
          paper_number: string;
          duration_minutes: number;
          total_marks: number;
          source_url?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["papers"]["Insert"]>;
        Relationships: [];
      };
      cognitive_levels: {
        Row: { id: string; subject_id: string; name: string; order_index: number };
        Insert: { id?: string; subject_id: string; name: string; order_index: number };
        Update: Partial<Database["public"]["Tables"]["cognitive_levels"]["Insert"]>;
        Relationships: [];
      };
      topics: {
        Row: {
          id: string;
          subject_id: string;
          parent_topic_id: string | null;
          name: string;
          caps_term: string | null;
          textbook_ref: string | null;
          textbook_url: string | null;
          video_url: string | null;
        };
        Insert: {
          id?: string;
          subject_id: string;
          parent_topic_id?: string | null;
          name: string;
          caps_term?: string | null;
          textbook_ref?: string | null;
          textbook_url?: string | null;
          video_url?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["topics"]["Insert"]>;
        Relationships: [];
      };
      questions: {
        Row: {
          id: string;
          paper_id: string;
          number: string;
          sub_number: string | null;
          text: string;
          marks: number;
          topic_id: string | null;
          cognitive_level_id: string | null;
          order_index: number;
          image_url: string | null;
          answer_mode: string;
          step_options: Json | null;
        };
        Insert: {
          id?: string;
          paper_id: string;
          number: string;
          sub_number?: string | null;
          text: string;
          marks: number;
          topic_id?: string | null;
          cognitive_level_id?: string | null;
          order_index?: number;
          image_url?: string | null;
          answer_mode?: string;
          step_options?: Json | null;
        };
        Update: Partial<Database["public"]["Tables"]["questions"]["Insert"]>;
        Relationships: [];
      };
      memo_answers: {
        Row: {
          id: string;
          question_id: string;
          model_answer: string;
          marking_notes: string | null;
          marking_points: Json | null;
        };
        Insert: {
          id?: string;
          question_id: string;
          model_answer: string;
          marking_notes?: string | null;
          marking_points?: Json | null;
        };
        Update: Partial<Database["public"]["Tables"]["memo_answers"]["Insert"]>;
        Relationships: [];
      };
      attempts: {
        Row: {
          id: string;
          user_id: string;
          paper_id: string;
          started_at: string;
          submitted_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          paper_id: string;
          started_at?: string;
          submitted_at?: string | null;
        };
        Update: Partial<Database["public"]["Tables"]["attempts"]["Insert"]>;
        Relationships: [];
      };
      attempt_answers: {
        Row: {
          id: string;
          attempt_id: string;
          question_id: string;
          answer_text: string | null;
          marks_awarded: number | null;
          marks_possible: number;
          ai_feedback: string | null;
          step_answers: Json | null;
        };
        Insert: {
          id?: string;
          attempt_id: string;
          question_id: string;
          answer_text?: string | null;
          marks_awarded?: number | null;
          marks_possible: number;
          ai_feedback?: string | null;
          step_answers?: Json | null;
        };
        Update: Partial<Database["public"]["Tables"]["attempt_answers"]["Insert"]>;
        Relationships: [];
      };
      study_actions: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          status: string;
          scheduled_retest_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          status?: string;
          scheduled_retest_at?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["study_actions"]["Insert"]>;
        Relationships: [];
      };
      exam_schedule: {
        Row: {
          id: string;
          subject_id: string;
          paper_number: string;
          exam_type: string;
          exam_date: string;
          start_time: string | null;
          duration_minutes: number | null;
        };
        Insert: {
          id?: string;
          subject_id: string;
          paper_number: string;
          exam_type: string;
          exam_date: string;
          start_time?: string | null;
          duration_minutes?: number | null;
        };
        Update: Partial<Database["public"]["Tables"]["exam_schedule"]["Insert"]>;
        Relationships: [];
      };
      study_notes: {
        Row: {
          id: string;
          user_id: string;
          topic_id: string;
          content: string;
          generated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          topic_id: string;
          content: string;
          generated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["study_notes"]["Insert"]>;
        Relationships: [];
      };
      guardian_links: {
        Row: {
          id: string;
          guardian_user_id: string;
          guardian_email: string;
          student_user_id: string;
          student_email: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          guardian_user_id: string;
          guardian_email: string;
          student_user_id: string;
          student_email: string;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["guardian_links"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
    CompositeTypes: Record<string, never>;
  };
}
