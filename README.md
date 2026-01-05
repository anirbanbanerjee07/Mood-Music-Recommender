# Mood-Music-Recommender
🎵 Mood Music Recommender: Select your mood &amp; get curated songs! Play Hindi/English tracks in a stylish interactive player with ❤️ like button, animations &amp; glassmorphism UI. Built with JS + Supabase for backend storage 🎶

## ✨ Features

- 😊 Mood-based song recommendation (Happy, Sad, Angry, Chill)
- 🎵 Online audio streaming using Supabase Storage
- 💿 Rotating album animation while music plays
- ❤️ Interactive love (heart) button with animation
- 🔄 Auto-play next song
- 🌈 Glassmorphism UI design
- 📱 Mobile-friendly & responsive

---

## 🛠 Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** Supabase (Database + Storage)  
- **Hosting:** Netlify / Live Server

---

## 📂 Project Structure

mood-music-player/
│
├── index.html
├── style.css
├── app.js
├── README.md

---

```yaml

## 🗄 Supabase Setup

### 1️⃣ Tables

**songs**
| Column | Type |
|------|------|
| id | int |
| mood | text |
| song_name | text |
| artist | text |
| song_url | text |

**moods**
| Column | Type |
|------|------|
| id | int |
| mood | text |
| note | text |

---

### 2️⃣ Storage Bucket

- Bucket name: **`songs`**
- Public access: ✅ Enabled
- Upload all `.mp3` files directly inside the bucket

Example URL:
https://YOUR_PROJECT_ID.supabase.co/storage/v1/object/public/songs/dil_chori.mp3

yaml
Copy code
