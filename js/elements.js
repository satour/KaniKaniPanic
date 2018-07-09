let d1 = 'right';
let d2 = 'right';
let d3 = 'right';
let d4 = 'right';

const KANI = `
  <marquee direction="${d1}" scrollamount="10">
    <div onclick="hit(self);">
    <img src="image/kani.jpg" style="height: 10px;">
    カニです
    </div>
  </marquee>
`;

const KANI_CHOTT_HAYAI = `
  <marquee direction="${d2}" scrollamount="20">
    <div onclick="hit(self);">
    <img src="image/kani.jpg" style="height: 10px;">
    カニです
    </div>
  </marquee>
`;

const KANI_HAYAI = `
  <marquee direction="${d3}" scrollamount="50">
    <div onclick="hit(self);">
    <img src="image/kani.jpg" style="height: 10px;">
    はやいカニです
    </div>
  </marquee>
`;

const KANI_DEKAI = `
  <marquee
    direction="${d4}"
    scrollamount="30">
    <div onclick="hit(self);">
      <img src="image/kani.jpg" style="height: 100px;">
      でかいカニです
    </div>
  </marquee>
`;

const BUTTON_REPLAY = `
  <div class="button_wrapper">
    <button onclick="location.reload();">PLAY AGAIN</button>
  </div>`;