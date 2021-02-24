function Visual() {
  const slider = document.getElementById('slider');
  const sliderWrap = document.querySelector('sliderWrap');
  const sliderList = document.querySelector('sliderList');
  const list = sliderList.getElementsByTagName('li');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  const btnList = document.querySelector('btnNum').getElementsByTagName('span');
  const active = document.querySelector('.active');
  // 이동시 계산에 사용될 변수
  const sliderLen = list.length; // slider li의 총갯수
  const sliderWidth = list[0].clientWidth; // slider li이 넓이
  const sliderSpeed = 500; // 복제된 요소로 돌아가는 시간차
  const startNum = 0;
  // 첫번째와 마지막 리스트 복제
  let firstChild = sliderList.firstElementChild;
  let lastChild = sliderList.lastElementChild;
  let clonedFirst = firstChild.cloneNode(true);
  let clonedLast = lastChild.cloneNode(true);

  sliderList.appendChild(clonedFirst);
  sliderList.prepend(clonedLast);
  // sliderList.insertBefore(clonedLast, firstChild)

  // sliderWrap 넓이 적용
  sliderList.style.width = sliderWidth * (sliderLen + 2) + 'px';
  // slider1이 보이도록 위치값 조정
  sliderList.style.transform =
    'translate(-' + sliderWidth * (startNum + 1) + 'px)';

  let curIndex = startNum;
  let curSlider = list[curIndex];

  nextBtn.onclick = function () {
    if (curIndex <= sliderLen - 1) {
      sliderList.style.transition = '0.5s';
      sliderList.style.transform =
        'translate(-' + sliderWidth * (curIndex + 2) + 'px)';
    }
    if (curIndex === sliderLen - 1) {
      setTimeout(function () {
        sliderList.style.transition = '0s';
        sliderList.style.transform = 'translate(-' + sliderWidth + 'px)';
      }, sliderSpeed);
      curIndex = -1;
    }
    curSlider = list[++curIndex];
  };
  prevBtn.onclick = function () {
    if (curIndex >= 0) {
      sliderList.style.transition = '0.5s';
      sliderList.style.transform =
        'translate(-' + sliderWidth * curIndex + 'px)';
    }
    if (curIndex === 0) {
      setTimeout(function () {
        sliderList.style.transition = '0s';
        sliderList.style.transform =
          'translate(-' + sliderWidth * sliderLen + 'px)';
      }, sliderSpeed);
      curIndex = sliderLen;
    }
    --curIndex;
  };

  return (
    <div className="slider">
    <div className="sliderWrap">
      <ul className="sliderList">
        <li className="slider1">
          <a href="#">슬라이더1</a>
        </li>
        <li className="slider2">
          <a href="#">슬라이더2</a>
        </li>
        <li className="slider3">
          <a href="#">슬라이더3</a>
        </li>
      </ul>
    </div>

    <Icon type="left" className="visual_button prev" />
    <Icon type="right" className="visual_button next" />

    <div className="btnNum">
      <span className="active"></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}

export default Visual;
