// 用單一頁面搭配網址片段切換畫面，重新整理後仍會停留在目前頁面。
const moodOptions = document.querySelectorAll('input[name="mood"]');
const moodCards = document.querySelectorAll(".mood-card");
const nextButton = document.querySelector("#next-button");
const selectionHint = document.querySelector("#selection-hint");
const chosenMood = document.querySelector("#chosen-mood");
const stepIndicator = document.querySelector("#step-indicator");
const intensitySlider = document.querySelector("#intensity-slider");
const intensityOutput = document.querySelector("#intensity-output");
const contextOptions = document.querySelectorAll('input[name="context"]');
const reflectionInput = document.querySelector("#reflection-input");
const sendFeelingsButton = document.querySelector("#send-feelings-button");
const moonLetter = document.querySelector("#moon-letter");
const letterIntensity = document.querySelector("#letter-intensity");
const letterEmpathy = document.querySelector("#letter-empathy");
const letterResponse = document.querySelector("#letter-response");
const letterSuggestions = document.querySelector("#letter-suggestions");
const safetyReminder = document.querySelector("#safety-reminder");
const letterActionFeedback = document.querySelector("#letter-action-feedback");
const trySuggestionButton = document.querySelector("#try-suggestion-button");
const encouragementButton = document.querySelector("#encouragement-button");
const returnToExplorationButton = document.querySelector("#return-to-exploration-button");
const musicMood = document.querySelector("#music-mood");
const companionMessage = document.querySelector("#companion-message");
const albumArt = document.querySelector("#album-art");
const albumArtEmoji = document.querySelector("#album-art-emoji");
const trackTitle = document.querySelector("#track-title");
const songGrid = document.querySelector("#song-grid");
const trackProgress = document.querySelector("#track-progress");
const currentTimeLabel = document.querySelector("#current-time");
const playButton = document.querySelector("#play-button");
const playIcon = document.querySelector("#play-icon");
const playerStatus = document.querySelector("#player-status");
const finalNote = document.querySelector("#final-note");
const sendToFutureButton = document.querySelector("#send-to-future-button");
const memoryCard = document.querySelector("#memory-card");
const memoryMoodSpirit = document.querySelector("#memory-mood-spirit");
const memoryMood = document.querySelector("#memory-mood");
const memoryOriginal = document.querySelector("#memory-original");
const memoryReply = document.querySelector("#memory-reply");
const memorySafetyReminder = document.querySelector("#memory-safety-reminder");
const memoryBlessing = document.querySelector("#memory-blessing");
const memoryDate = document.querySelector("#memory-date");
const memoryCardFeedback = document.querySelector("#memory-card-feedback");
const rewriteNoteButton = document.querySelector("#rewrite-note-button");
const collectMemoryCardButton = document.querySelector("#collect-memory-card-button");
const completeJourneyButton = document.querySelector("#complete-journey-button");
const journeyCompleteMessage = document.querySelector("#journey-complete-message");
const constellationSky = document.querySelector("#constellation-sky");
const constellationCount = document.querySelector("#constellation-count");
const constellationDetail = document.querySelector("#constellation-detail");
const constellationEmpty = document.querySelector("#constellation-empty");
const clearConstellationButton = document.querySelector("#clear-constellation-button");
const calendarPreviousMonthButton = document.querySelector("#calendar-previous-month");
const calendarNextMonthButton = document.querySelector("#calendar-next-month");
const calendarTodayButton = document.querySelector("#calendar-today-button");
const calendarMonthTitle = document.querySelector("#calendar-month-title");
const moodCalendarGrid = document.querySelector("#mood-calendar-grid");
const calendarDiaryCard = document.querySelector("#calendar-diary-card");
const diaryMoodPortrait = document.querySelector("#diary-mood-portrait");
const diaryMoodImage = document.querySelector("#diary-mood-image");
const calendarDiaryDate = document.querySelector("#calendar-diary-date");
const diaryMoodLabel = document.querySelector("#diary-mood-label");
const diaryIntensity = document.querySelector("#diary-intensity");
const diaryReflectionEntry = document.querySelector("#diary-reflection-entry");
const diaryReflection = document.querySelector("#diary-reflection");
const diaryResponseEntry = document.querySelector("#diary-response-entry");
const diaryResponse = document.querySelector("#diary-response");
const diaryFinalNoteEntry = document.querySelector("#diary-final-note-entry");
const diaryFinalNote = document.querySelector("#diary-final-note");
const diaryFinalReplyEntry = document.querySelector("#diary-final-reply-entry");
const diaryFinalReply = document.querySelector("#diary-final-reply");
const calendarNoRecord = document.querySelector("#calendar-no-record");
const calendarDeleteFeedback = document.querySelector("#calendar-delete-feedback");
const deleteDayRecordButton = document.querySelector("#delete-day-record-button");
const monthRecordDays = document.querySelector("#month-record-days");
const monthMostCommon = document.querySelector("#month-most-common");
const monthStars = document.querySelector("#month-stars");
const moodDistribution = document.querySelector("#mood-distribution");
const moonSpeech = document.querySelector("#moon-speech");
const moonMascotButton = document.querySelector("#moon-mascot-button");
const siteShell = document.querySelector(".site-shell");
const meteorLayer = document.querySelector("#meteor-layer");
const pageViews = {
  home: document.querySelector("#home-view"),
  mood: document.querySelector("#mood-view"),
  explore: document.querySelector("#explore-view"),
  music: document.querySelector("#music-view"),
  reflection: document.querySelector("#reflection-view"),
  constellation: document.querySelector("#constellation-view"),
};
const availableMoods = new Set(
  Array.from(moodOptions, (option) => option.value),
);
const availableContexts = new Set(
  Array.from(contextOptions, (option) => option.value),
);
const reducedMotionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
const storedMood = sessionStorage.getItem("moodMusicMood");
const constellationStorageKey = "moodMusicConstellation";
const today = new Date();
let calendarYear = today.getFullYear();
let calendarMonth = today.getMonth();
let selectedCalendarDate = null;
const mascotMessages = {
  home: ["嗨！歡迎來到心情點播室，一起展開音樂旅程吧！", "今天也給自己一點溫柔的時間吧。"],
  mood: ["今天的你，心情是什麼顏色呢？", "每一種心情都可以被好好聽見。"],
  explore: ["慢慢來，試著聽聽自己內心的聲音。", "不用急著找到答案，我會陪著你。"],
  music: ["今天也辛苦了，來聽首歌吧！", "讓旋律陪你休息一下。"],
  reflection: ["每一份心情都值得被好好珍藏。", "謝謝你今天願意陪伴自己。"],
  constellation: ["看看你一路點亮的心情星星。", "每一次與自己的相遇，都很珍貴。"],
};
const moodLetters = {
  開心: {
    empathy: "開心是很值得珍惜的感受，不必覺得它太小，也不用擔心快樂會不會很快消失。",
    response: "如果願意，替今天的好心情取個名字，記下一件讓你嘴角上揚的小事。以後回頭看見這段記錄，也能再次想起這份亮亮的感覺。",
    suggestions: ["在心情日記寫下一件今天喜歡的事。", "把這份好心情分享給一位讓你安心的人。", "留意身體此刻輕鬆或有精神的感覺。"],
    encouragements: ["你的快樂不需要很大理由；能感受到它，本身就很珍貴。", "把這個小小的亮點收進心裡，之後也可以拿出來回味。"],
  },
  難過: {
    empathy: "難過可以先待在這裡，不必趕著變好；現在的感受不會讓你變成麻煩。",
    response: "如果這件事還在心上，可以先讓自己慢一點。聽一首陪伴你的歌，或找一位信任的大人、朋友說一點點，都可以，不必一次講完。",
    suggestions: ["選一首讓你覺得被陪伴的歌，安靜聽完。", "喝幾口水，找個舒服安全的地方坐一會兒。", "傳訊息給信任的人，說「我今天有點難過，可以陪我一下嗎？」"],
    encouragements: ["你不用立刻振作，也不用獨自把所有事想清楚。", "就算現在只想休息一下，也是在好好照顧自己。"],
  },
  生氣: {
    empathy: "生氣可能是在提醒你有事情很重要，或有界線需要被看見；這份感受值得先被理解。",
    response: "情緒很滿的時候先不急著回應，讓自己離開衝突一下，等身體比較平穩，再想想你希望對方理解什麼、下一步怎麼說。",
    suggestions: ["先暫停對話，離開現場到安全、安靜的地方。", "慢慢吸氣四拍、吐氣六拍，重複幾次。", "等情緒緩和後，寫下「我在意的是……」再決定怎麼表達。"],
    encouragements: ["暫停不是認輸，而是先替自己留一點選擇的空間。", "你的感受值得被聽見，也可以用保護自己的方式說出來。"],
  },
  焦慮: {
    empathy: "焦慮常在事情很多或還不確定時出現；不需要一次解決全部，先承認自己正在擔心就好。",
    response: "試著把腦中的大問題拆成幾件小事，分清楚哪些現在能做、哪些需要等待或找人幫忙。你只需要處理眼前可以掌握的一步。",
    suggestions: ["把擔心的事情寫下來，圈出今天能做的一小步。", "用五感找回當下：說出看到的三樣東西、聽到的兩種聲音。", "如果牽涉課業或期限，找老師或家人一起確認優先順序。"],
    encouragements: ["不確定的事情可以慢慢確認，不用現在就知道所有答案。", "完成一小步也算前進，不必和別人的速度比較。"],
  },
  疲憊: {
    empathy: "覺得累是一個值得留意的訊號，不代表你不夠努力；身體和心都需要補充能量。",
    response: "如果可以，先把非緊急的事情放一放。休息不是偷懶，喝水、伸展或短暫離開螢幕，都能讓自己喘口氣。",
    suggestions: ["喝一杯水，讓肩膀放鬆並伸展一下。", "選一件今天可以延後或簡化的事情，替自己留出休息時間。", "播放一首舒服的歌，閉眼休息幾分鐘。"],
    encouragements: ["今天能走到這裡已經不容易，允許自己先停一停。", "你不必等到所有事情完成，才值得休息。"],
  },
  平靜: {
    empathy: "這份平靜值得被好好感受，不必急著做些什麼，也不需要把它變成任務。",
    response: "可以留意此刻有哪些小事讓你覺得安穩，例如熟悉的聲音、舒服的光線，或有人在身旁。記住它們，未來也許能成為你的休息角落。",
    suggestions: ["用一句話記下此刻讓你安心的事物。", "慢慢呼吸三次，感受身體放鬆的地方。", "把這段自在留給自己，不急著切換到下一件事。"],
    encouragements: ["你可以享受這段安靜，不需要向任何人證明什麼。", "知道什麼讓自己平靜，是很溫柔的自我認識。"],
  },
  不知道: {
    empathy: "暫時不知道自己的感受也完全可以，不必急著替它取名字，或逼自己現在就想明白。",
    response: "有時候感受像幾種顏色混在一起，先注意身體和眼前發生的事就好。等準備好了，答案可能會慢慢浮現；現在留白也沒關係。",
    suggestions: ["選一個最接近的詞，或只寫「我還在感覺」。", "喝水、看看窗外，先做一件讓身體舒服的小事。", "找信任的人待在一起，不一定要馬上解釋原因。"],
    encouragements: ["你可以先不確定，感受沒有期限，也不需要標準答案。", "願意停下來看看自己，已經是很細心的一步。"],
  },
};
const moodSpiritImages = {
  開心: "assets/images/mood-spirits/happy.svg",
  難過: "assets/images/mood-spirits/sad.svg",
  生氣: "assets/images/mood-spirits/angry.svg",
  焦慮: "assets/images/mood-spirits/anxious.svg",
  疲憊: "assets/images/mood-spirits/tired.svg",
  平靜: "assets/images/mood-spirits/calm.svg",
  不知道: "assets/images/mood-spirits/unsure.svg",
};
let mascotMessageIndex = 0;
let currentPage = "";
const musicCatalog = {
  開心: {
    message: "把這份好心情收藏起來吧！",
    emoji: "🌼",
    color: "happy",
    tracks: [
      { title: "陽光跳跳糖", notes: [72, 76, 79, 84, 79, 76, 74, 79], tempo: 112, wave: "sine" },
      { title: "口袋裡的小星星", notes: [76, 79, 83, 88, 83, 79, 76, 83], tempo: 104, wave: "triangle" },
    ],
  },
  難過: {
    message: "不用急著開心起來，我陪你。",
    emoji: "🌧️",
    color: "sad",
    tracks: [
      { title: "雨停之前", notes: [60, 64, 67, 64, 62, 65, 69, 65], tempo: 76, wave: "sine" },
      { title: "柔軟的雲朵", notes: [62, 65, 69, 65, 60, 64, 67, 64], tempo: 72, wave: "triangle" },
    ],
  },
  生氣: {
    message: "先深呼吸，讓自己休息一下。",
    emoji: "🍃",
    color: "angry",
    tracks: [
      { title: "慢慢吐氣", notes: [60, 64, 67, 64, 60, 62, 65, 62], tempo: 68, wave: "sine" },
      { title: "安靜的角落", notes: [57, 60, 64, 60, 59, 62, 65, 62], tempo: 64, wave: "triangle" },
    ],
  },
  焦慮: {
    message: "一步一步來，你不需要一次做到完美。",
    emoji: "🌙",
    color: "anxious",
    tracks: [
      { title: "一步一顆星", notes: [64, 67, 69, 72, 69, 67, 65, 69], tempo: 78, wave: "sine" },
      { title: "呼吸的節拍", notes: [60, 64, 67, 71, 67, 64, 62, 65], tempo: 72, wave: "triangle" },
    ],
  },
  疲憊: {
    message: "辛苦了，現在先讓自己休息。",
    emoji: "☁️",
    color: "tired",
    tracks: [
      { title: "枕頭雲", notes: [60, 64, 67, 64, 57, 60, 64, 60], tempo: 60, wave: "sine" },
      { title: "晚安小宇宙", notes: [55, 59, 62, 59, 57, 60, 64, 60], tempo: 58, wave: "triangle" },
    ],
  },
  平靜: {
    message: "好好享受這份自在吧！",
    emoji: "🌿",
    color: "calm",
    tracks: [
      { title: "湖面微光", notes: [64, 67, 71, 67, 62, 66, 69, 66], tempo: 82, wave: "sine" },
      { title: "午後的微風", notes: [60, 64, 67, 72, 67, 64, 62, 67], tempo: 80, wave: "triangle" },
    ],
  },
  不知道: {
    message: "沒關係，不需要馬上找到答案。",
    emoji: "✨",
    color: "unsure",
    tracks: [
      { title: "還沒命名的心情", notes: [60, 63, 67, 70, 67, 65, 62, 65], tempo: 74, wave: "sine" },
      { title: "答案在路上", notes: [62, 65, 68, 72, 68, 65, 60, 65], tempo: 76, wave: "triangle" },
    ],
  },
};
const recommendationCatalog = {
  開心: [
    { title: "陽光宅男", artist: "周杰倫", cover: "☀", note: "把喜歡的人事物放進日常，平凡的一天也會閃閃發亮。心情正好的你，不妨收藏此刻自在又勇敢的自己。" },
    { title: "日不落", artist: "蔡依林", cover: "🌅", note: "像把期待放進一段明亮旅程，提醒好心情可以延續。適合回味今天值得珍藏的小事，讓快樂多停留一下。" },
    { title: "不潮不用花錢", artist: "林俊傑", cover: "✦", note: "歌裡輕鬆談做自己，不必為迎合別人改變。開心自在時，就相信現在的樣子已經很好。" },
  ],
  難過: [
    { title: "怎麼了", artist: "周興哲", cover: "☾", note: "像有人停下來問你還好嗎，讓說不出口的失落也能被理解。難過時不必急著振作，先安心感受自己的心情。" },
    { title: "有一種悲傷", artist: "A-Lin", cover: "☁", note: "陪你面對想念與告別，也提醒悲傷不必立刻消失。若今天心裡有些重量，就讓自己慢慢走過這段時光。" },
    { title: "我好嗎", artist: "梁靜茹", cover: "♡", note: "像一次溫柔的自我詢問，陪你整理還說不清楚的感受。若不確定自己是否真的沒事，試著誠實照顧自己。" },
  ],
  生氣: [
    { title: "怪美的", artist: "蔡依林", cover: "✧", note: "用自己的方式看待不完美，不必被別人的眼光定義。若生氣是因為受委屈，記得你的感受值得被尊重。" },
    { title: "倔強", artist: "五月天", cover: "☆", note: "遇到挫折時，仍能相信自己有繼續前進的力量。等怒氣慢慢退去，帶著這份勇氣選擇下一步方向。" },
    { title: "差不多姑娘", artist: "鄧紫棋", cover: "✦", note: "提醒你不必只照別人的標準生活，也能為自己做選擇。若因不公平而生氣，先聽聽心裡想守護的事。" },
  ],
  焦慮: [
    { title: "裂縫中的陽光", artist: "林俊傑", cover: "☼", note: "即使遇到不順利，仍能在縫隙裡看見希望。擔心事情做不好時，先完成眼前的一小步就很足夠。" },
    { title: "隱形的翅膀", artist: "張韶涵", cover: "🪽", note: "陪你相信自己擁有力量，也有人在身旁支持。若正為未知不安，不必一次走很遠，慢慢練習也是前進。" },
    { title: "人生海海", artist: "五月天", cover: "≈", note: "人生有起伏，不代表你做得不夠好；有些事需要時間明白。焦慮時回到當下，允許自己一步一步來。" },
  ],
  疲憊: [
    { title: "日常", artist: "田馥甄", cover: "☁", note: "從平凡生活看見自己的步調，不必每天都耀眼。累了就先停一下，照顧好今天的自己也很重要。" },
    { title: "稻香", artist: "周杰倫", cover: "🌾", note: "提醒你回想簡單真實的快樂，暫時離開忙碌與比較。事情好多時，先休息並找回讓自己安心的小事。" },
    { title: "暖暖", artist: "梁靜茹", cover: "☀", note: "像收到一份溫熱的關心，想起生活裡珍貴的陪伴。疲憊時聽聽它，留給自己一點柔軟的喘息空間。" },
  ],
  平靜: [
    { title: "無用", artist: "田馥甄", cover: "☾", note: "暫時放下非得證明什麼的壓力，安靜回到自己的感受。平靜時聽一聽，享受不必急著完成事情的片刻。" },
    { title: "小酒窩", artist: "林俊傑、蔡卓妍", cover: "♡", note: "珍惜相處時的小小溫柔，讓普通日子也有微笑理由。心情平靜時，陪你多留意身邊那些簡單的美好。" },
    { title: "達爾文", artist: "蔡健雅", cover: "✿", note: "透過成長與改變，陪你理解自己正慢慢成為不同的模樣。安靜聽著它，也能接納一路走來的自己。" },
  ],
  不知道: [
    { title: "給未來的自己", artist: "梁靜茹", cover: "✉", note: "像寫信給未來的自己，把現在的疑惑與期待好好收下。不知道答案也沒關係，帶著今天繼續前進就好。" },
    { title: "我", artist: "蔡依林", cover: "☆", note: "陪你看看自己是誰，慢慢找回心裡重視的聲音。若說不清楚感受，就多給自己一點時間，不必急著下結論。" },
    { title: "新的心跳", artist: "鄧紫棋", cover: "✧", note: "把重新開始的可能留給自己，即使還不知道下一站在哪裡，也能帶著期待出發，在迷惘中慢慢找方向。" },
  ],
};
let audioContext;
let masterGain;
let musicTimer;
let currentMoodForMusic = "";
let currentTrackIndex = 0;
let currentBeat = 0;
let isPlaying = false;
let meteorTimer;
let meteorPairTimer;

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function spawnMeteor() {
  if (reducedMotionPreference.matches || !meteorLayer) {
    return;
  }

  const width = window.innerWidth;
  const height = window.innerHeight;
  const length = randomBetween(110, 180);
  const travelX = -width * randomBetween(0.62, 1.05);
  const angle = randomBetween(132, 148);
  const travelY = Math.abs(travelX) * Math.tan((180 - angle) * Math.PI / 180);
  const meteor = document.createElement("span");
  meteor.className = "meteor-shot";
  meteor.style.width = `${length}px`;
  meteor.style.left = `${width * randomBetween(0.58, 1.02) - length}px`;
  meteor.style.top = `${height * randomBetween(0.04, 0.3) - 5}px`;
  meteor.style.setProperty("--meteor-angle", `${angle}deg`);
  meteor.style.setProperty("--meteor-travel-x", `${travelX}px`);
  meteor.style.setProperty("--meteor-travel-y", `${travelY}px`);
  meteor.style.animationDuration = `${randomBetween(650, 1050)}ms`;

  const streak = document.createElement("span");
  streak.className = "meteor-streak";
  const tail = document.createElement("span");
  tail.className = "meteor-tail";
  const head = document.createElement("span");
  head.className = "meteor-head";
  streak.append(tail, head);
  meteor.append(streak);
  meteor.addEventListener("animationend", () => meteor.remove(), { once: true });
  meteorLayer.append(meteor);
}

function scheduleMeteor() {
  if (reducedMotionPreference.matches) {
    return;
  }

  meteorTimer = window.setTimeout(() => {
    spawnMeteor();
    if (Math.random() < 0.12) {
      meteorPairTimer = window.setTimeout(spawnMeteor, randomBetween(350, 700));
    }
    scheduleMeteor();
  }, randomBetween(5000, 12000));
}

function updateMeteorMotion() {
  window.clearTimeout(meteorTimer);
  window.clearTimeout(meteorPairTimer);
  meteorLayer.replaceChildren();
  if (!reducedMotionPreference.matches) {
    scheduleMeteor();
  }
}

reducedMotionPreference.addEventListener("change", updateMeteorMotion);
updateMeteorMotion();

function createJourneyId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }
  return `journey-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function localDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function isValidDateKey(value) {
  if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(value)) {
    return false;
  }
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day;
}

function dateFromKey(value) {
  const [year, month, day] = value.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function dateLabel(value, options = { year: "numeric", month: "long", day: "numeric" }) {
  return dateFromKey(value).toLocaleDateString("zh-Hant", options);
}

function normalizeConstellationRecords(records) {
  const byDate = new Map();
  records.forEach((record) => {
    const memoryCard = record.memoryCard;
    const memoryDate = memoryCard ? new Date(memoryCard.date) : null;
    const completionDate = new Date(record.completedAt);
    const date = isValidDateKey(record.date)
      ? record.date
      : memoryDate && !Number.isNaN(memoryDate.getTime())
        ? localDateKey(memoryDate)
        : localDateKey(completionDate);
    const normalized = {
      ...record,
      date,
      intensity: Number.isInteger(record.intensity) && record.intensity >= 1 && record.intensity <= 10
        ? record.intensity
        : null,
      reflection: typeof record.reflection === "string" ? record.reflection : "",
      moodReply: typeof record.moodReply === "string" ? record.moodReply : "",
      finalNote: typeof record.finalNote === "string"
        ? record.finalNote
        : memoryCard?.originalText || "",
      finalReply: typeof record.finalReply === "string"
        ? record.finalReply
        : memoryCard?.reply || "",
    };
    const previous = byDate.get(date);
    if (!previous) {
      byDate.set(date, normalized);
      return;
    }

    const latest = new Date(normalized.completedAt) >= new Date(previous.completedAt)
      ? normalized
      : previous;
    const earlier = latest === normalized ? previous : normalized;
    byDate.set(date, {
      ...earlier,
      ...latest,
      intensity: latest.intensity ?? earlier.intensity,
      reflection: latest.reflection || earlier.reflection,
      moodReply: latest.moodReply || earlier.moodReply,
      finalNote: latest.finalNote || earlier.finalNote,
      finalReply: latest.finalReply || earlier.finalReply,
      memoryCard: latest.memoryCard || earlier.memoryCard,
    });
  });
  return Array.from(byDate.values()).sort((first, second) => first.date.localeCompare(second.date));
}

function readConstellationRecords() {
  let savedRecords;
  try {
    savedRecords = localStorage.getItem(constellationStorageKey);
  } catch (error) {
    constellationDetail.textContent = `心情紀錄讀取失敗：${error.message}`;
    return null;
  }
  if (!savedRecords) {
    return [];
  }

  try {
    const records = JSON.parse(savedRecords);
    if (
      Array.isArray(records) &&
      records.every(
        (record) =>
          record &&
          typeof record.id === "string" &&
          availableMoods.has(record.mood) &&
          typeof record.completedAt === "string" &&
          !Number.isNaN(new Date(record.completedAt).getTime()) &&
          (!record.date || isValidDateKey(record.date)) &&
          (record.intensity === undefined ||
            record.intensity === null ||
            (Number.isInteger(record.intensity) && record.intensity >= 1 && record.intensity <= 10)) &&
          ["reflection", "moodReply", "finalNote", "finalReply"].every(
            (key) => record[key] === undefined || typeof record[key] === "string",
          ) &&
          (record.memoryCard === undefined ||
            (record.memoryCard &&
              typeof record.memoryCard.originalText === "string" &&
              typeof record.memoryCard.reply === "string" &&
              typeof record.memoryCard.date === "string" &&
              typeof record.memoryCard.blessing === "string" &&
              (record.memoryCard.safetyReminder === undefined ||
                typeof record.memoryCard.safetyReminder === "boolean"))),
      )
    ) {
      return normalizeConstellationRecords(records);
    }
    constellationDetail.textContent = "心情紀錄格式無法辨識，為保護資料，暫時不會修改它。";
    return null;
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }
    constellationDetail.textContent = "心情紀錄讀取失敗，原有資料未被刪除。";
    return null;
  }
}

function setJourneyIdForMood(mood) {
  const records = readConstellationRecords();
  sessionStorage.setItem("moodMusicJourneyStage", "1");
  if (!records) {
    sessionStorage.setItem("moodMusicMood", mood);
    return;
  }
  const currentId = sessionStorage.getItem("moodMusicJourneyId");
  if (!currentId || records.some((record) => record.id === currentId)) {
    sessionStorage.setItem("moodMusicJourneyId", createJourneyId());
  }
  sessionStorage.setItem("moodMusicMood", mood);
}

function renderCalendarDiary(dateKey, records) {
  const record = records.find((item) => item.date === dateKey);
  calendarDiaryCard.hidden = false;
  calendarDiaryDate.textContent = dateLabel(dateKey);
  diaryMoodPortrait.hidden = !record;
  calendarNoRecord.hidden = Boolean(record);
  deleteDayRecordButton.hidden = !record;
  diaryIntensity.hidden = !record || !record.intensity;
  diaryReflectionEntry.hidden = !record || !record.reflection;
  diaryResponseEntry.hidden = !record || !record.moodReply;
  diaryFinalNoteEntry.hidden = !record || !record.finalNote;
  diaryFinalReplyEntry.hidden = !record || !record.finalReply;
  calendarDeleteFeedback.textContent = "";

  if (!record) {
    diaryMoodLabel.textContent = "";
    return;
  }

  diaryMoodImage.src = moodSpiritImages[record.mood];
  diaryMoodImage.alt = `${record.mood}心情精靈`;
  diaryMoodLabel.textContent = `那天的心情：${record.mood}`;
  diaryIntensity.textContent = `心情強度：${record.intensity}/10`;
  diaryReflection.textContent = record.reflection;
  diaryResponse.textContent = record.moodReply;
  diaryFinalNote.textContent = record.finalNote;
  diaryFinalReply.textContent = record.finalReply;
}

function selectCalendarDate(dateKey, records) {
  selectedCalendarDate = dateKey;
  moodCalendarGrid.querySelectorAll(".calendar-day").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.date === dateKey);
    button.setAttribute("aria-pressed", String(button.dataset.date === dateKey));
  });
  renderCalendarDiary(dateKey, records);
}

function renderMoodDistribution(counts, monthTotal) {
  moodDistribution.replaceChildren();
  Array.from(availableMoods).forEach((mood) => {
    const count = counts.get(mood) || 0;
    const row = document.createElement("div");
    row.className = "mood-distribution-row";
    const label = document.createElement("span");
    label.className = "mood-distribution-label";
    label.textContent = mood;
    const track = document.createElement("span");
    track.className = "mood-distribution-track";
    track.setAttribute("aria-hidden", "true");
    const bar = document.createElement("span");
    bar.className = "mood-distribution-bar";
    bar.style.width = `${monthTotal ? (count / monthTotal) * 100 : 0}%`;
    track.append(bar);
    const value = document.createElement("span");
    value.className = "mood-distribution-count";
    value.textContent = `${count} 天`;
    row.setAttribute("aria-label", `${mood}：${count} 天`);
    row.append(label, track, value);
    moodDistribution.append(row);
  });
}

function renderMoodCalendar(records) {
  const monthStart = new Date(calendarYear, calendarMonth, 1);
  calendarMonthTitle.textContent = monthStart.toLocaleDateString("zh-Hant", {
    year: "numeric",
    month: "long",
  });
  moodCalendarGrid.replaceChildren();
  const firstDay = monthStart.getDay();
  const daysInMonth = new Date(calendarYear, calendarMonth + 1, 0).getDate();
  const todayKey = localDateKey(new Date());
  const currentMonthRecords = records.filter((record) => record.date.startsWith(
    `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-`,
  ));
  const recordByDate = new Map(currentMonthRecords.map((record) => [record.date, record]));

  for (let cell = 0; cell < 42; cell += 1) {
    const day = cell - firstDay + 1;
    if (day < 1 || day > daysInMonth) {
      const emptyCell = document.createElement("span");
      emptyCell.className = "calendar-day-empty";
      emptyCell.setAttribute("aria-hidden", "true");
      moodCalendarGrid.append(emptyCell);
      continue;
    }
    const dateKey = `${calendarYear}-${String(calendarMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    const record = recordByDate.get(dateKey);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "calendar-day";
    button.dataset.date = dateKey;
    button.setAttribute("aria-pressed", String(dateKey === selectedCalendarDate));
    button.setAttribute("aria-label", record
      ? `${dateLabel(dateKey)}，${record.mood}心情紀錄`
      : `${dateLabel(dateKey)}，沒有心情紀錄`);
    button.classList.toggle("is-today", dateKey === todayKey);
    button.classList.toggle("has-record", Boolean(record));
    button.classList.toggle("is-selected", dateKey === selectedCalendarDate);
    const dayNumber = document.createElement("span");
    dayNumber.className = "calendar-day-number";
    dayNumber.textContent = String(day);
    button.append(dayNumber);
    if (record) {
      const image = document.createElement("img");
      image.className = "calendar-mood-spirit";
      image.src = moodSpiritImages[record.mood];
      image.alt = "";
      image.loading = "lazy";
      button.append(image);
    } else {
      const star = document.createElement("span");
      star.className = "calendar-day-star";
      star.setAttribute("aria-hidden", "true");
      star.textContent = "✦";
      button.append(star);
    }
    button.addEventListener("click", () => selectCalendarDate(dateKey, records));
    moodCalendarGrid.append(button);
  }

  const counts = new Map(Array.from(availableMoods, (mood) => [mood, 0]));
  currentMonthRecords.forEach((record) => counts.set(record.mood, counts.get(record.mood) + 1));
  const monthTotal = currentMonthRecords.length;
  monthRecordDays.textContent = `這個月，你留下了 ${monthTotal} 天的心情紀錄。`;
  const highestCount = Math.max(0, ...counts.values());
  const mostCommon = highestCount
    ? Array.from(counts).filter(([, count]) => count === highestCount).map(([mood]) => mood).join("、")
    : "";
  monthMostCommon.textContent = highestCount
    ? `這個月，你最常記錄的是${mostCommon}。`
    : "這個月還沒有心情紀錄，任何時候都可以開始。";
  monthStars.textContent = `這個月，你點亮了 ${monthTotal} 顆星星。`;
  renderMoodDistribution(counts, monthTotal);

  if (selectedCalendarDate) {
    renderCalendarDiary(selectedCalendarDate, records);
    moodCalendarGrid.querySelectorAll(".calendar-day").forEach((button) => {
      button.classList.toggle("is-selected", button.dataset.date === selectedCalendarDate);
      button.setAttribute("aria-pressed", String(button.dataset.date === selectedCalendarDate));
    });
  }
}

function renderConstellation() {
  const records = readConstellationRecords() || [];
  constellationCount.textContent = `你已點亮 ${records.length} 顆每日心情星星`;
  constellationEmpty.hidden = records.length > 0;
  constellationSky.replaceChildren();
  records.forEach((record, index) => {
    const star = document.createElement("button");
    star.type = "button";
    star.className = "constellation-star";
    star.style.setProperty("--star-delay", `${(index % 9) * -0.37}s`);
    star.textContent = "✦";
    star.setAttribute("aria-label", `查看${dateLabel(record.date)}的${record.mood}心情紀錄`);
    star.addEventListener("click", () => {
      const date = dateFromKey(record.date);
      calendarYear = date.getFullYear();
      calendarMonth = date.getMonth();
      renderMoodCalendar(records);
      selectCalendarDate(record.date, records);
      calendarDiaryCard.scrollIntoView({
        behavior: reducedMotionPreference.matches ? "auto" : "smooth",
        block: "center",
      });
    });
    constellationSky.append(star);
  });
  renderMoodCalendar(records);
  if (!selectedCalendarDate) {
    calendarDiaryCard.hidden = true;
  }
}

function updateMascot(page, showBubble = true) {
  const messages = mascotMessages[page] || mascotMessages.home;
  mascotMessageIndex = 0;
  moonSpeech.textContent = messages[mascotMessageIndex];
  moonSpeech.classList.toggle("is-visible", showBubble);
}

function getContextReply(text, contexts) {
  const topics = [
    { pattern: /考試|功課|作業|成績|上課|課業/, reply: "課業和考試容易讓腦袋一直轉；把要做的事列出來，先處理一件最小的，或請老師一起釐清題目，會比一個人扛著更輕鬆。" },
    { pattern: /朋友|同學|吵架|排擠|相處/, reply: "和朋友或同學相處有時很牽動心情。你可以先想想自己希望被怎麼對待，再挑安全、合適的時候說出感受；若覺得難開口，也能找信任的大人陪你。" },
    { pattern: /家人|爸媽|父母|家庭|家裡/, reply: "家裡的事情可能讓人有很多複雜感受。你不必一個人解決大人的問題，可以找信任的親友、老師或輔導老師說說，先讓自己有支持。" },
    { pattern: /喜歡|告白|感情|暗戀/, reply: "喜歡一個人或在意一段關係，心情有起伏很自然。先照顧好自己的步調，不必急著得到答案，也可以把注意力放回讓你安心的生活。" },
    { pattern: /失敗|做不到|害怕|擔心|怕/, reply: "你提到的擔心聽起來很佔心思。先分辨哪些是已經發生、哪些是預想，再找一件此刻能做的小事；如果自己難以整理，找人一起想也可以。" },
    { pattern: /孤單|沒有人|沒人|不被理解/, reply: "覺得沒有人理解時會很不好受。可以試著找一位相對安心的人，從一句「我最近有點不好受」開始；你值得有人認真聽你說。" },
  ];
  const matchedTopic = topics.find((topic) => topic.pattern.test(text));
  if (matchedTopic) {
    return matchedTopic.reply;
  }
  if (contexts.length) {
    return `你選了「${contexts.join("、")}」，代表這些事情可能正在牽動你。可以先挑其中最想被理解的一件事，想想你需要的是休息、陪伴，還是有人幫忙一起處理。`;
  }
  return "不論這份心情從哪裡來，都可以先不用急著解決。試著留意自己現在最需要的是休息、陪伴，還是把事情說清楚，再選一個最小的照顧方式。";
}

function isSafetyConcern(text) {
  return /自傷|自殘|傷害.{0,3}自己|自己.{0,3}傷害|不想.{0,3}活|活不下去|想死|自殺|輕生|結束.{0,4}(生命|一切)|被打|被傷害|受到傷害|有人傷害我|被威脅|被霸凌|遭受傷害/.test(text);
}

function buildMoodLetter() {
  const mood = sessionStorage.getItem("moodMusicMood");
  if (!availableMoods.has(mood)) {
    return;
  }
  const content = reflectionInput.value.trim();
  const intensity = Number(intensitySlider.value);
  const contexts = Array.from(contextOptions)
    .filter((option) => option.checked)
    .map((option) => option.value);
  const letter = moodLetters[mood];
  const intensityPhrase = intensity >= 8
    ? "這份心情現在感覺很強烈，先把照顧自己放在前面。"
    : intensity >= 5
      ? "這份心情佔了你一些注意力，值得慢慢聽聽它。"
      : "即使這份心情只是一點點，也值得被你留意。";
  letterIntensity.textContent = `你選擇了「${mood}」，心情強度 ${intensity}/10。${intensityPhrase}`;
  letterEmpathy.textContent = letter.empathy;
  letterResponse.textContent = content
    ? `${letter.response} ${getContextReply(content, contexts)}`
    : letter.response;
  letterSuggestions.replaceChildren();

  let suggestions = letter.suggestions;
  const safetyConcern = isSafetyConcern(content);
  if (safetyConcern) {
    letterEmpathy.textContent = "謝謝你把這件重要而不容易的事說出來。你不需要獨自面對，也不必先把一切解釋清楚；現在最重要的是讓自己身邊有可信任的人陪著。";
    letterResponse.textContent = "請現在就告訴一位可信任的大人、家人、老師或學校輔導老師，並盡量待在有人陪伴且安全的地方。如果你或他人正處於立即危險，請聯絡當地緊急服務。";
    suggestions = [
      "現在就走到可信任的大人身邊，直接說「我需要你陪我，我現在不太安全」。",
      "若在台灣，可撥 1925 安心專線；若有立即危險，請撥 119 或前往最近的急診。",
      "如果你受到他人傷害，先到安全、有大人在的地方，並告訴老師或可信任的照顧者。",
    ];
  }

  suggestions.forEach((suggestion) => {
    const item = document.createElement("li");
    item.textContent = suggestion;
    letterSuggestions.append(item);
  });
  safetyReminder.hidden = !safetyConcern;
  safetyReminder.textContent = safetyConcern
    ? "安全提醒：這個網站不能提供即時保護或危機服務。請立刻找身邊可信任的大人陪伴；在台灣可撥 1925，若有立即危險請撥 119。"
    : "";
  letterActionFeedback.textContent = "";
  trySuggestionButton.disabled = false;
  encouragementButton.dataset.index = "0";
  moonLetter.hidden = false;
  sessionStorage.setItem("moodMusicReflection", reflectionInput.value);
  sessionStorage.setItem("moodMusicLetterResponse", letterResponse.textContent);
  sessionStorage.setItem("moodMusicLetterSource", JSON.stringify({
    mood,
    intensity,
    reflection: reflectionInput.value,
    contexts,
  }));
  moonLetter.scrollIntoView({ behavior: reducedMotionPreference.matches ? "auto" : "smooth", block: "start" });
}

function buildFutureReply(text, mood) {
  const message = text.trim();
  if (isSafetyConcern(message)) {
    return "謝謝你願意把這件重要的事說出來。你不需要獨自面對，現在請先讓一位可信任的大人、家人、老師或學校輔導老師陪著你。若你或他人正處於立即危險，請聯絡當地緊急服務。";
  }
  let personalResponse = "你願意停下來寫給自己，表示你正在認真聽自己的心。這份話不用立刻做到完美，之後也可以帶著新的想法再回來看。";
  if (/勇敢|害怕|失敗|嘗試|挑戰/.test(message)) {
    personalResponse = "原來你正在期待自己面對害怕時，也能多一點勇氣。勇敢不是完全不害怕，而是即使有點擔心，仍願意給自己一次小小的嘗試。每一步都值得肯定，不必一下子變得很厲害。";
  } else if (/希望|期待|夢想|想要|願望/.test(message)) {
    personalResponse = "你寫下了一個重要的期待，願意把它說出來，就是在替它留一個位置。目標可以慢慢長大，今天先選一件小事靠近它，不需要一次完成全部。";
  } else if (/休息|好累|累了|放鬆|睡覺/.test(message)) {
    personalResponse = "你正在提醒自己需要休息，這份需要值得被認真對待。休息不是放棄，而是讓身心有機會補充力氣；先照顧今天的自己，再慢慢安排接下來的事。";
  } else if (/朋友|同學|家人|爸媽|理解|陪伴/.test(message)) {
    personalResponse = "你寫的話裡有對關係的在意，也有希望被理解的心情。可以先從一個小小而安全的表達開始；如果還沒準備好說出口，也可以先把感受寫給自己看。";
  } else if (/謝謝自己|辛苦|努力|我很棒|肯定/.test(message)) {
    personalResponse = "你正在看見自己已經付出的努力，請把這份肯定好好收下。即使還有沒完成的事，今天走過的每一步也都是真的。";
  } else if (!message) {
    personalResponse = "今天選擇留白也可以。願你記得，心情不必整理成句子才值得被珍惜；準備好時，隨時都能再寫給未來的自己。";
  }
  const moodLine = {
    開心: "也願你把今天的一點亮光留在心裡，累的時候可以想起它。",
    難過: "願未來的你記得，難過的日子也值得被溫柔陪伴。",
    生氣: "願你能保護自己的界線，也找到讓心慢慢平靜的方法。",
    焦慮: "願你記得只要走好眼前的一小步，不必一次想完所有答案。",
    疲憊: "願你允許自己休息，並記得你不需要靠不停努力才值得被喜歡。",
    平靜: "願這份安穩陪著你，在忙碌時也能找到回來的路。",
    不知道: "願你保有慢慢認識自己的空間，不急著得到所有答案。",
  }[mood] || "願你在每個新的日子裡，都能用自己的步調照顧自己。";
  return `${personalResponse} ${moodLine}`;
}

function generateMemoryCard() {
  const mood = sessionStorage.getItem("moodMusicMood");
  if (!availableMoods.has(mood)) {
    memoryCardFeedback.textContent = "請先選擇今天的心情，再為未來的自己寫一張卡片。";
    return;
  }
  const text = finalNote.value;
  const date = new Date();
  memoryMoodSpirit.src = moodSpiritImages[mood];
  memoryMoodSpirit.alt = `${mood}心情精靈`;
  memoryMood.textContent = mood;
  memoryOriginal.textContent = text.trim() || "（今天選擇留白，把這份心情好好收下。）";
  memoryReply.textContent = buildFutureReply(text, mood);
  const safetyConcern = isSafetyConcern(text);
  memorySafetyReminder.hidden = !safetyConcern;
  memorySafetyReminder.textContent = safetyConcern
    ? "安全提醒：這個網站不能提供即時保護或危機服務。請立刻找身邊可信任的大人陪伴；在台灣可撥 1925，若有立即危險請撥 119。"
    : "";
  memoryBlessing.textContent = safetyConcern
    ? "你值得被保護。現在先讓可信任的大人陪在身邊。"
    : moodLetters[mood].encouragements[0];
  memoryDate.textContent = date.toLocaleDateString("zh-Hant", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  memoryCard.dataset.reply = memoryReply.textContent;
  memoryCard.dataset.originalText = text;
  memoryCard.dataset.mood = mood;
  memoryCard.dataset.date = localDateKey(date);
  memoryCard.dataset.blessing = memoryBlessing.textContent;
  memoryCard.dataset.safetyReminder = String(safetyConcern);
  memoryCard.hidden = false;
  collectMemoryCardButton.disabled = false;
  memoryCardFeedback.textContent = "這張卡片只會在你按下「收藏這份心情」後，儲存在這台裝置的心情星空。";
  memoryCard.scrollIntoView({ behavior: reducedMotionPreference.matches ? "auto" : "smooth", block: "start" });
}

function saveMemoryCardToConstellation() {
  if (memoryCard.hidden || collectMemoryCardButton.disabled) {
    return;
  }
  if (!saveCurrentJourneyRecord()) {
    return;
  }
  collectMemoryCardButton.disabled = true;
  collectMemoryCardButton.textContent = "已收藏到我的心情星空 ✦";
  memoryCardFeedback.textContent = "收藏完成！這張心情卡已加入你的心情星空，只保存在這台裝置。";
}

function currentJourneyRecord() {
  const mood = sessionStorage.getItem("moodMusicMood");
  if (!availableMoods.has(mood)) {
    return null;
  }
  const contexts = Array.from(contextOptions)
    .filter((option) => option.checked)
    .map((option) => option.value);
  const intensity = Number(intensitySlider.value);
  const source = JSON.stringify({
    mood,
    intensity,
    reflection: reflectionInput.value,
    contexts,
  });
  if (sessionStorage.getItem("moodMusicLetterSource") !== source) {
    buildMoodLetter();
  }

  const finalText = finalNote.value;
  const cardMatchesCurrentText = !memoryCard.hidden &&
    memoryCard.dataset.originalText === finalText &&
    memoryCard.dataset.mood === mood;
  const finalReply = cardMatchesCurrentText
    ? memoryCard.dataset.reply
    : buildFutureReply(finalText, mood);
  const hasSavedCard = cardMatchesCurrentText || Boolean(finalText.trim());
  const safetyConcern = isSafetyConcern(finalText);
  const journeyId = sessionStorage.getItem("moodMusicJourneyId") || createJourneyId();
  sessionStorage.setItem("moodMusicJourneyId", journeyId);

  return {
    id: journeyId,
    mood,
    completedAt: new Date().toISOString(),
    date: localDateKey(new Date()),
    intensity: Number.isInteger(intensity) && intensity >= 1 && intensity <= 10 ? intensity : null,
    reflection: reflectionInput.value,
    moodReply: sessionStorage.getItem("moodMusicLetterResponse") || "",
    finalNote: finalText,
    finalReply: hasSavedCard ? finalReply : "",
    ...(hasSavedCard
      ? {
          memoryCard: {
            originalText: finalText,
            reply: finalReply,
            date: localDateKey(new Date()),
            blessing: cardMatchesCurrentText
              ? memoryCard.dataset.blessing
              : moodLetters[mood].encouragements[0],
            safetyReminder: safetyConcern,
          },
        }
      : {}),
  };
}

function saveCurrentJourneyRecord() {
  const newRecord = currentJourneyRecord();
  if (!newRecord) {
    memoryCardFeedback.textContent = "請先選擇今天的心情，再收藏這份心情。";
    return false;
  }
  const records = readConstellationRecords();
  if (!records) {
    memoryCardFeedback.textContent = "目前無法讀取心情星空，紀錄尚未儲存，原有資料未被修改。";
    return false;
  }

  const existingIndex = records.findIndex((record) => record.date === newRecord.date);
  if (existingIndex >= 0) {
    const existing = records[existingIndex];
    const unchanged = existing.mood === newRecord.mood &&
      existing.intensity === newRecord.intensity &&
      existing.reflection === newRecord.reflection &&
      existing.moodReply === newRecord.moodReply &&
      existing.finalNote === newRecord.finalNote &&
      existing.finalReply === newRecord.finalReply;
    if (unchanged) {
      return true;
    }
    if (!window.confirm("今天已經有一筆心情紀錄。要用這次的內容更新今天的紀錄嗎？")) {
      memoryCardFeedback.textContent = "沒有更新紀錄，原本的心情日記仍然保留。";
      journeyCompleteMessage.textContent = "沒有更新紀錄，原本的心情日記仍然保留。";
      return false;
    }
    newRecord.id = existing.id;
    records[existingIndex] = newRecord;
  } else {
    records.push(newRecord);
  }

  try {
    localStorage.setItem(constellationStorageKey, JSON.stringify(records));
  } catch (error) {
    memoryCardFeedback.textContent = `紀錄儲存失敗，原有資料仍保留：${error.message}`;
    journeyCompleteMessage.textContent = `紀錄儲存失敗：${error.message}`;
    return false;
  }
  return true;
}


function getMusicDuration() {
  const track = musicCatalog[currentMoodForMusic].tracks[currentTrackIndex];
  return 64 * 30 / track.tempo;
}

// 只還原有效的情緒選項，避免舊資料或錯誤值造成畫面不同步。
if (storedMood && availableMoods.has(storedMood)) {
  const savedOption = Array.from(moodOptions).find(
    (option) => option.value === storedMood,
  );
  if (savedOption) {
    savedOption.checked = true;
    updateMoodSelection(storedMood);
  }
} else if (storedMood) {
  sessionStorage.removeItem("moodMusicMood");
}

// 還原探索頁資料；滑桿只接受 1 到 10 的整數。
const storedIntensity = Number(sessionStorage.getItem("moodMusicIntensity"));
if (Number.isInteger(storedIntensity) && storedIntensity >= 1 && storedIntensity <= 10) {
  intensitySlider.value = String(storedIntensity);
}
intensityOutput.value = intensitySlider.value;

const storedContexts = sessionStorage.getItem("moodMusicContexts");
if (storedContexts) {
  try {
    const parsedContexts = JSON.parse(storedContexts);
    if (
      Array.isArray(parsedContexts) &&
      parsedContexts.every((context) => availableContexts.has(context))
    ) {
      contextOptions.forEach((option) => {
        option.checked = parsedContexts.includes(option.value);
        option.closest(".context-option").classList.toggle("is-selected", option.checked);
      });
    } else {
      sessionStorage.removeItem("moodMusicContexts");
    }
  } catch (error) {
    if (!(error instanceof SyntaxError)) {
      throw error;
    }
    sessionStorage.removeItem("moodMusicContexts");
  }
}

reflectionInput.value = sessionStorage.getItem("moodMusicReflection") || "";
finalNote.value = sessionStorage.getItem("moodMusicFinalNote") || "";

// 更新卡片樣式、提示文字與下一步按鈕。
function updateMoodSelection(mood) {
  moodCards.forEach((card) => {
    const option = card.querySelector('input[name="mood"]');
    card.classList.toggle("is-selected", option.value === mood);
  });

  selectionHint.textContent = `你選擇了「${mood}」，準備好繼續探索了嗎？`;
  nextButton.hidden = false;
}

// 點選情緒時立即儲存，並顯示選取狀態。
moodOptions.forEach((option) => {
  option.addEventListener("change", () => {
    setJourneyIdForMood(option.value);
    updateMoodSelection(option.value);
  });
});

// 即時更新情緒強度數字，並將數值保存在目前分頁。
intensitySlider.addEventListener("input", () => {
  intensityOutput.value = intensitySlider.value;
  sessionStorage.setItem("moodMusicIntensity", intensitySlider.value);
});
sessionStorage.setItem("moodMusicIntensity", intensitySlider.value);

// 情境支援複選，勾選狀態與資料同步保存。
function saveContexts() {
  const selectedContexts = Array.from(contextOptions)
    .filter((option) => option.checked)
    .map((option) => option.value);
  sessionStorage.setItem("moodMusicContexts", JSON.stringify(selectedContexts));
}

contextOptions.forEach((option) => {
  option.addEventListener("change", () => {
    option.closest(".context-option").classList.toggle("is-selected", option.checked);
    saveContexts();
  });
});

// 自由書寫為選填，只保存在目前瀏覽器分頁，不會傳送到伺服器。
reflectionInput.addEventListener("input", () => {
  sessionStorage.setItem("moodMusicReflection", reflectionInput.value);
});

sendFeelingsButton.addEventListener("click", buildMoodLetter);

trySuggestionButton.addEventListener("click", () => {
  const firstSuggestion = letterSuggestions.querySelector("li");
  if (firstSuggestion) {
    letterActionFeedback.textContent = `好呀，先從這一步開始：${firstSuggestion.textContent}`;
  }
});

encouragementButton.addEventListener("click", () => {
  const mood = sessionStorage.getItem("moodMusicMood");
  if (!availableMoods.has(mood)) {
    return;
  }
  const encouragements = moodLetters[mood].encouragements;
  const index = Number(encouragementButton.dataset.index || 0);
  letterActionFeedback.textContent = encouragements[index % encouragements.length];
  encouragementButton.dataset.index = String(index + 1);
});

returnToExplorationButton.addEventListener("click", () => {
  letterActionFeedback.textContent = "可以慢慢修改或補充，寫下的內容仍保留在輸入框裡。";
  reflectionInput.focus();
  reflectionInput.scrollIntoView({ behavior: reducedMotionPreference.matches ? "auto" : "smooth", block: "center" });
});

// 導覽按鈕以網址片段切換頁面，瀏覽器上一頁／下一頁也能正常使用。
document.querySelectorAll("[data-go]").forEach((button) => {
  button.addEventListener("click", () => {
    const destination = button.dataset.go;
    if (
      ["explore", "music", "reflection"].includes(destination) &&
      !availableMoods.has(sessionStorage.getItem("moodMusicMood"))
    ) {
      selectionHint.textContent = "請先選擇一種心情，再前往下一步。";
      window.location.hash = "mood";
      return;
    }

    const currentRoute = window.location.hash.slice(1) || "home";
    if (destination === "music" && currentRoute === "explore") {
      sessionStorage.setItem("moodMusicJourneyStage", "2");
    } else if (destination === "reflection" && currentRoute === "music") {
      sessionStorage.setItem("moodMusicJourneyStage", "3");
    }

    window.location.hash = destination;
  });
});

// 最後一句話只保存在目前分頁，不會寫進心情星座紀錄。
finalNote.addEventListener("input", () => {
  sessionStorage.setItem("moodMusicFinalNote", finalNote.value);
});

sendToFutureButton.addEventListener("click", generateMemoryCard);
collectMemoryCardButton.addEventListener("click", saveMemoryCardToConstellation);

rewriteNoteButton.addEventListener("click", () => {
  finalNote.value = "";
  sessionStorage.removeItem("moodMusicFinalNote");
  memoryCard.hidden = true;
  collectMemoryCardButton.disabled = true;
  collectMemoryCardButton.textContent = "收藏這份心情";
  memoryCardFeedback.textContent = "";
  finalNote.focus();
  finalNote.scrollIntoView({ behavior: reducedMotionPreference.matches ? "auto" : "smooth", block: "center" });
});

completeJourneyButton.addEventListener("click", () => {
  const mood = sessionStorage.getItem("moodMusicMood");
  if (!availableMoods.has(mood)) {
    journeyCompleteMessage.textContent = "請先選擇今天的心情，再完成這趟旅程。";
    return;
  }

  if (Number(sessionStorage.getItem("moodMusicJourneyStage")) < 3) {
    journeyCompleteMessage.textContent = "請依序完成心情探索與音樂點播，再為這趟旅程點亮星星。";
    return;
  }

  if (!saveCurrentJourneyRecord()) {
    return;
  }

  journeyCompleteMessage.textContent = "你又完成了一次與自己的相遇。今天的星星已經亮起！";
  completeJourneyButton.disabled = true;
  window.setTimeout(() => {
    window.location.hash = "constellation";
  }, 850);
});

calendarPreviousMonthButton.addEventListener("click", () => {
  calendarMonth -= 1;
  if (calendarMonth < 0) {
    calendarMonth = 11;
    calendarYear -= 1;
  }
  selectedCalendarDate = null;
  calendarDiaryCard.hidden = true;
  renderConstellation();
});

calendarNextMonthButton.addEventListener("click", () => {
  calendarMonth += 1;
  if (calendarMonth > 11) {
    calendarMonth = 0;
    calendarYear += 1;
  }
  selectedCalendarDate = null;
  calendarDiaryCard.hidden = true;
  renderConstellation();
});

calendarTodayButton.addEventListener("click", () => {
  const currentDate = new Date();
  calendarYear = currentDate.getFullYear();
  calendarMonth = currentDate.getMonth();
  const records = readConstellationRecords() || [];
  renderMoodCalendar(records);
  selectCalendarDate(localDateKey(currentDate), records);
});

deleteDayRecordButton.addEventListener("click", () => {
  if (!selectedCalendarDate || !window.confirm(`確定要刪除 ${dateLabel(selectedCalendarDate)} 的心情紀錄嗎？這個動作無法復原。`)) {
    return;
  }
  const records = readConstellationRecords();
  if (!records) {
    calendarDeleteFeedback.textContent = "目前無法讀取心情紀錄，沒有刪除任何資料。";
    return;
  }
  const remainingRecords = records.filter((record) => record.date !== selectedCalendarDate);
  try {
    localStorage.setItem(constellationStorageKey, JSON.stringify(remainingRecords));
  } catch (error) {
    calendarDeleteFeedback.textContent = `刪除失敗，原有資料仍保留：${error.message}`;
    return;
  }
  renderConstellation();
  renderCalendarDiary(selectedCalendarDate, remainingRecords);
  calendarDeleteFeedback.textContent = "這一天的紀錄已刪除。";
});

clearConstellationButton.addEventListener("click", () => {
  if (!window.confirm("確定要清除所有心情星座紀錄嗎？這個動作無法復原。")) {
    return;
  }

  try {
    localStorage.removeItem(constellationStorageKey);
  } catch (error) {
    constellationDetail.textContent = `清除紀錄失敗：${error.message}`;
    return;
  }

  selectedCalendarDate = null;
  calendarDiaryCard.hidden = true;
  constellationDetail.textContent = "星座紀錄已清除。";
  renderConstellation();
});

moonMascotButton.addEventListener("click", () => {
  const messages = mascotMessages[currentPage] || mascotMessages.home;
  mascotMessageIndex = (mascotMessageIndex + 1) % messages.length;
  moonSpeech.textContent = messages[mascotMessageIndex];
  moonSpeech.classList.add("is-visible");
});

document.querySelector("#dream-piano").addEventListener("click", (event) => {
  const piano = event.currentTarget;
  if (piano.disabled) {
    return;
  }

  piano.disabled = true;
  piano.classList.add("is-playing-entry");
  siteShell.classList.add("is-launching");
  const transitionDuration = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ? 40
    : 1250;

  window.setTimeout(() => {
    window.location.hash = "mood";
    siteShell.classList.remove("is-launching");
    piano.classList.remove("is-playing-entry");
    piano.disabled = false;
  }, transitionDuration);
});

function renderPage() {
  let page = window.location.hash.slice(1) || "home";

  if (!Object.prototype.hasOwnProperty.call(pageViews, page)) {
    page = "home";
  }

  // 尚未選擇心情時不能直接進入探索、音樂或自我對話頁。
  if (
    ["explore", "music", "reflection"].includes(page) &&
    !availableMoods.has(sessionStorage.getItem("moodMusicMood"))
  ) {
    page = "mood";
    window.location.hash = page;
  }

  const journeyStage = Number(sessionStorage.getItem("moodMusicJourneyStage")) || 0;
  if (page === "explore" && journeyStage < 1) {
    page = "mood";
    window.location.hash = page;
  } else if (page === "music" && journeyStage < 2) {
    page = journeyStage >= 1 ? "explore" : "mood";
    window.location.hash = page;
  } else if (page === "reflection" && journeyStage < 3) {
    page = journeyStage >= 2 ? "music" : journeyStage >= 1 ? "explore" : "mood";
    window.location.hash = page;
  }

  if (currentPage === "music" && page !== "music") {
    stopPlayback("已離開音樂點播頁。");
  }

  Object.entries(pageViews).forEach(([name, view]) => {
    view.hidden = name !== page;
  });

  document.body.dataset.page = page;

  if (currentPage !== page) {
    updateMascot(page);
  }
  currentPage = page;

  if (page === "mood") {
    stepIndicator.textContent = "第一站・選擇今天的心情";
  } else if (page === "explore") {
    stepIndicator.textContent = "第二站・心情小探索";
    chosenMood.textContent = sessionStorage.getItem("moodMusicMood");
  } else if (page === "music") {
    stepIndicator.textContent = "第三站・專屬音樂點播";
    renderMusicPage();
  } else if (page === "reflection") {
    stepIndicator.textContent = "第四站・給自己的一句話";
    const journeyId = sessionStorage.getItem("moodMusicJourneyId");
    const completed = readConstellationRecords()?.some((record) => record.id === journeyId);
    completeJourneyButton.disabled = completed;
    completeJourneyButton.textContent = completed
      ? "這趟旅程已點亮星星 ✦"
      : "完成今天的旅程 ✦";
  } else if (page === "constellation") {
    stepIndicator.textContent = "我的心情星座";
    renderConstellation();
  } else {
    stepIndicator.textContent = "準備好聽聽自己的心情了嗎？";
  }
}

// 將 MIDI 音高轉成頻率，使用 Web Audio API 即時合成示範旋律。
function midiToFrequency(note) {
  return 440 * 2 ** ((note - 69) / 12);
}

function playTone(note, startAt, duration, wave, volume) {
  const oscillator = audioContext.createOscillator();
  const gain = audioContext.createGain();
  oscillator.type = wave;
  oscillator.frequency.value = midiToFrequency(note);
  gain.gain.setValueAtTime(0.0001, startAt);
  gain.gain.exponentialRampToValueAtTime(volume, startAt + 0.035);
  gain.gain.exponentialRampToValueAtTime(0.0001, startAt + duration);
  oscillator.connect(gain);
  gain.connect(masterGain);
  oscillator.start(startAt);
  oscillator.stop(startAt + duration + 0.02);
}

function playCurrentBeat() {
  const mood = musicCatalog[currentMoodForMusic];
  const track = mood.tracks[currentTrackIndex];
  const beatDuration = 30 / track.tempo;
  const noteIndex = Math.floor(currentBeat / 2) % track.notes.length;
  const startAt = audioContext.currentTime + 0.02;

  if (currentBeat % 2 === 0) {
    playTone(track.notes[noteIndex], startAt, beatDuration * 1.7, track.wave, 0.12);
  }
  if (currentBeat % 8 === 0) {
    playTone(track.notes[noteIndex] - 12, startAt, beatDuration * 7, "sine", 0.045);
  }
}

function formatTime(seconds) {
  const wholeSeconds = Math.floor(seconds);
  return `${Math.floor(wholeSeconds / 60)}:${String(wholeSeconds % 60).padStart(2, "0")}`;
}

function updateProgress() {
  const duration = getMusicDuration();
  const elapsed = Math.min(duration, currentBeat * duration / 64);
  trackProgress.value = String(elapsed);
  currentTimeLabel.textContent = formatTime(elapsed);
}

function updatePlayButton() {
  playIcon.textContent = isPlaying ? "Ⅱ" : "▶";
  playButton.setAttribute("aria-label", isPlaying ? "暫停音樂" : "播放音樂");
  albumArt.classList.toggle("is-playing", isPlaying);
}

function stopPlayback(status = "按下播放，聽聽這段為你即時演奏的旋律。") {
  window.clearInterval(musicTimer);
  musicTimer = undefined;
  isPlaying = false;
  updatePlayButton();
  playerStatus.textContent = status;
}

function startPlayback() {
  const AudioContextConstructor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextConstructor) {
    playerStatus.textContent = "這個瀏覽器不支援音訊播放，請改用較新版本的瀏覽器。";
    return;
  }

  if (!audioContext) {
    audioContext = new AudioContextConstructor();
    masterGain = audioContext.createGain();
    masterGain.gain.value = 0.65;
    masterGain.connect(audioContext.destination);
  }

  audioContext.resume().then(() => {
    if (currentPage !== "music") {
      return;
    }
    if (isPlaying) {
      return;
    }
    if (currentBeat >= 64) {
      currentBeat = 0;
    }
    isPlaying = true;
    updatePlayButton();
    playerStatus.textContent = "正在為你播放原創示範旋律。";
    playCurrentBeat();
    currentBeat += 1;
    musicTimer = window.setInterval(() => {
      if (currentBeat >= 64) {
        stopPlayback("旋律播放完畢，想再聽一次可以按播放。");
        currentBeat = 64;
        updateProgress();
        return;
      }
      playCurrentBeat();
      currentBeat += 1;
      updateProgress();
    }, 30 * 1000 / musicCatalog[currentMoodForMusic].tracks[currentTrackIndex].tempo);
  }).catch((error) => {
    playerStatus.textContent = `音訊無法播放：${error.message}`;
  });
}

function renderTrack() {
  const mood = musicCatalog[currentMoodForMusic];
  const track = mood.tracks[currentTrackIndex];
  trackTitle.textContent = track.title;
  albumArtEmoji.textContent = mood.emoji;
  albumArt.className = `album-art album-art-${mood.color}`;
  const duration = getMusicDuration();
  trackProgress.max = String(duration);
  document.querySelector("#duration-time").textContent = formatTime(duration);
  currentBeat = 0;
  updateProgress();
}

function selectTrack(index, autoplay = isPlaying) {
  stopPlayback("已為你換好旋律。");
  currentTrackIndex = index;
  sessionStorage.setItem("moodMusicTrackIndex", String(index));
  renderTrack();
  if (autoplay) {
    startPlayback();
  }
}

// 依情緒建立推薦歌曲卡片，YouTube 連結使用歌曲與歌手的搜尋結果。
function renderRecommendedSongs(mood) {
  songGrid.replaceChildren();

  recommendationCatalog[mood].forEach((song, index) => {
    const card = document.createElement("article");
    card.className = `song-card song-card-${index + 1}`;

    const cover = document.createElement("div");
    cover.className = `song-cover song-cover-${mood}`;
    cover.setAttribute("aria-hidden", "true");
    const orbit = document.createElement("span");
    orbit.className = "song-cover-orbit";
    const symbol = document.createElement("span");
    symbol.className = "song-cover-symbol";
    symbol.textContent = song.cover;
    const star = document.createElement("span");
    star.className = "song-cover-star";
    star.textContent = "✦";
    cover.append(orbit, symbol, star);

    const coverCaption = document.createElement("p");
    coverCaption.className = "song-cover-caption";
    coverCaption.textContent = "心情色彩插畫";
    cover.append(coverCaption);

    const details = document.createElement("div");
    details.className = "song-card-details";
    const title = document.createElement("h3");
    title.textContent = song.title;
    const artist = document.createElement("p");
    artist.className = "song-artist";
    artist.textContent = song.artist;
    const recommendationLabel = document.createElement("p");
    recommendationLabel.className = "song-recommendation-label";
    recommendationLabel.textContent = "想對你說";
    const note = document.createElement("p");
    note.className = "song-recommendation";
    note.textContent = song.note;

    const youtubeLink = document.createElement("a");
    youtubeLink.className = "song-youtube-link";
    youtubeLink.href = `https://www.youtube.com/results?search_query=${encodeURIComponent(`${song.artist} ${song.title}`)}`;
    youtubeLink.target = "_blank";
    youtubeLink.rel = "noopener noreferrer";
    youtubeLink.textContent = "在 YouTube 搜尋這首歌 ↗";
    youtubeLink.setAttribute("aria-label", `在 YouTube 搜尋${song.artist}的${song.title}`);

    details.append(title, artist, recommendationLabel, note, youtubeLink);
    card.append(cover, details);
    songGrid.append(card);
  });
}

function renderMusicPage() {
  const mood = sessionStorage.getItem("moodMusicMood");
  if (!availableMoods.has(mood)) {
    return;
  }

  if (currentMoodForMusic !== mood) {
    if (currentMoodForMusic) {
      stopPlayback("心情已更新，為你準備新的旋律。");
    }
    currentMoodForMusic = mood;
    musicMood.textContent = mood;
    companionMessage.textContent = musicCatalog[mood].message;
    renderRecommendedSongs(mood);
    const savedIndex = Number(sessionStorage.getItem("moodMusicTrackIndex"));
    currentTrackIndex =
      Number.isInteger(savedIndex) &&
      savedIndex >= 0 &&
      savedIndex < musicCatalog[mood].tracks.length
        ? savedIndex
        : 0;
    renderTrack();
    playerStatus.textContent = "按下播放，聽聽這段為你即時演奏的旋律。";
  }
}

playButton.addEventListener("click", () => {
  if (isPlaying) {
    stopPlayback("音樂已暫停。");
  } else {
    startPlayback();
  }
});

document.querySelector("#next-track-button").addEventListener("click", () => {
  const wasPlaying = isPlaying;
  const tracks = musicCatalog[currentMoodForMusic].tracks;
  selectTrack((currentTrackIndex + 1) % tracks.length, wasPlaying);
});

document.querySelector("#shuffle-button").addEventListener("click", () => {
  const wasPlaying = isPlaying;
  const tracks = musicCatalog[currentMoodForMusic].tracks;
  const nextIndex = (currentTrackIndex + 1 + Math.floor(Math.random() * (tracks.length - 1))) % tracks.length;
  selectTrack(nextIndex, wasPlaying);
});

trackProgress.addEventListener("input", () => {
  currentBeat = Math.round(Number(trackProgress.value) * 64 / getMusicDuration());
  updateProgress();
  if (isPlaying) {
    stopPlayback("已調整播放進度。");
    startPlayback();
  }
});

window.addEventListener("hashchange", renderPage);
renderPage();
