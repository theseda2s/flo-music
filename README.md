# flo-music

### 1. Global-header

- 로그인을 하지 않은 경우

```html
<div class="sub-nav">
  <ul class="sub-nav__list">
    <li class="sub-nav__item">
      <a class="sub-nav__link" href="/">크리에이터 스튜디오</a>
    </li>
    <li class="sub-nav__item">
      <a class="sub-nav__link" href="/">로그인</a>
    </li>
    <li class="sub-nav__item">
      <a class="sub-nav__link" href="/">회원가입</a>
    </li>
  </ul>
</div>
```

- 로그인을 했을 경우

```html
<div class="sub-nav">
  <ul class="sub-nav__list">
    <li class="sub-nav__item">
      <a class="sub-nav__link" href="/">크리에이터 스튜디오</a>
    </li>
    <li class="sub-nav__item">
      <div class="user-character">
        <button class="user-character__button">
          <span class="user-character__name">데이</span>
          <img
            class="user-character__thumbnail"
            src="./assets/images/user-default-image.png"
            alt="데이"
          />
        </button>
        <div class="user-character__info">
          <ul class="user-character__list">
            <li class="user-character__item">
              <button class="character" type="button">
                <div class="character__thumbnail">
                  <img
                    src="./assets/images/user-default-image.png"
                    alt="데이 캐릭터"
                  />
                  <i class="ic-checked" aria-label="캐릭터 선택"></i>
                </div>
                <div class="character__info">
                  <strong class="playlist-title">데이</strong>
                  <span class="taste-text">취향을 선택해주세요</span>
                </div>
              </button>
              <button class="user-character__setting" type="button">
                관리
              </button>
            </li>

            <li class="user-character__item">
              <button class="character" type="button">
                <div class="character__thumbnail character__thumbnail--new">
                  <i class="ic-plus" aria-label="캐릭터 추가하기 버튼"></i>
                </div>
                <span class="playlist-add-text">캐릭터 추가하기</span>
              </button>
            </li>
          </ul>
          <div class="user-character__user-info-wrapper">
            <div class="info">
              <a class="info__setting" href="/">
                정보 관리 <i class="ic-setting" aria-hidden></i
              ></a>
              <dl>
                <dt class="hidden">로그인 계정</dt>
                <dd>thesed2s12@gmail.com</dd>
              </dl>
            </div>
            <div class="info">
              <a class="info__setting" href="/"
                >이용권 관리 <i class="ic-setting" aria-hidden></i
              ></a>
              <dl>
                <dt class="hidden">이용 정보</dt>
                <dd>사용중이 이용권이 없습니다</dd>
              </dl>
            </div>
          </div>
          <button class="user-character__logout" type="button">로그아웃</button>
        </div>
      </div>
    </li>
  </ul>
</div>
```
