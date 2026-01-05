// Supabase config
const SUPABASE_URL = "YOUR_PROJECT_SUPABASE_URL";
const SUPABASE_ANON_KEY = "YOUR_PROJECT_SUPABASE_API";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_ANON_KEY
);

const audioPlayer = document.getElementById("audioPlayer");
const album = document.getElementById("album");
const songList = document.getElementById("songs");
const nowPlaying = document.getElementById("nowPlaying");
const loveBtn = document.getElementById("loveBtn");

let currentSongs = [];
let currentIndex = -1;

// LOVE BUTTON
loveBtn.onclick = () => {
  loveBtn.classList.toggle("loved");
};

// SAVE MOOD & FETCH SONGS
async function saveMood() {
  const mood = document.getElementById("mood").value;
  const note = document.getElementById("note").value;

  audioPlayer.pause();
  album.classList.remove("playing");
  songList.innerHTML = "<li>🎵 Loading...</li>";

  await supabaseClient.from("moods").insert([{ mood, note }]);

  const { data: songs } = await supabaseClient
    .from("songs")
    .select("*")
    .eq("mood", mood);

  songList.innerHTML = "";
  currentSongs = songs;
  currentIndex = -1;

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `🎶 ${song.song_name}`;
    li.onclick = () => playSong(index);
    songList.appendChild(li);
  });
}

// PLAY SONG
function playSong(index) {
  if (!currentSongs[index]) return;

  currentIndex = index;
  audioPlayer.src = currentSongs[index].song_url;
  audioPlayer.play();

  nowPlaying.textContent = `🎵 ${currentSongs[index].song_name}`;
  album.classList.add("playing");

  Array.from(songList.children).forEach(li => li.classList.remove("playing"));
  songList.children[index].classList.add("playing");
}

// AUTO PLAY NEXT SONG
audioPlayer.addEventListener("ended", () => {
  if (currentIndex + 1 < currentSongs.length) {
    playSong(currentIndex + 1);
  } else {
    album.classList.remove("playing");
  }
});

// PAUSE ROTATION
audioPlayer.addEventListener("pause", () => {
  album.classList.remove("playing");
});

// BUTTON
document
  .getElementById("getSongsBtn")
  .addEventListener("click", saveMood);

