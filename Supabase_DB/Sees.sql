-- 1️⃣ Create moods table
CREATE TABLE IF NOT EXISTS moods (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id uuid REFERENCES auth.users(id),
  mood text NOT NULL,
  note text,
  created_at timestamp with time zone DEFAULT now()
);

-- 2️⃣ Create songs table
CREATE TABLE IF NOT EXISTS songs (
  id uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  mood text NOT NULL,
  song_name text NOT NULL,
  artist text,
  song_url text,
  created_at timestamp with time zone DEFAULT now()
);

-- 3️⃣ Insert sample songs
INSERT INTO songs (mood, song_name, artist, song_url) VALUES
('happy', 'Dil Chori', '', 'https://YOUR_PROJECT_URL/storage/v1/object/public/songs/dil_chori.mp3'),
('happy', 'Kar Gayi Chull', '', 'https://YOUR_PROJECT_URL/storage/v1/object/public/songs/kar_gayi_chull.mp3'),
('sad', 'Channa Mereya', '', 'https://YOUR_PROJECT_URL/storage/v1/object/public/songs/channa_mereya.mp3'),
('angry', 'Malhari', '', 'https://YOUR_PROJECT_URL/storage/v1/object/public/songs/malhari.mp3'),
('chill', 'Raabta', '', 'https://YOUR_PROJECT_URL/storage/v1/object/public/songs/raabta.mp3');
