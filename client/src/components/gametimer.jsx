import { useEffect } from "react";
import "../components/gametimer.css";

export default function Timer(finishEvent) {
  useEffect(() => {
    const els = {
      s: initElements("s"),
      m: initElements("m"),
      h: initElements("h"),
      d: initElements("d"),
    };
    //console.log(els.s[1].digit);

    (function runClock() {
      if (!document.hidden) {
        var dateFuture = new Date(2024, 10, 6, 16, 0, 0, 0);
        var dateNow = new Date();
        if (dateNow > dateFuture) {
          finishEvent();
        }
        var seconds = Math.floor((dateFuture - dateNow) / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);
        hours = hours - days * 24;

        minutes = minutes - days * 24 * 60 - hours * 60;
        seconds =
          seconds - days * 24 * 60 * 60 - hours * 60 * 60 - minutes * 60;
        const now = {
          h: hours,
          m: minutes,
          s: seconds,
          d: days,
        };
        now.h = now.h < 10 ? `0${now.h}` : `${now.h}`;
        now.m = now.m < 10 ? `0${now.m}` : `${now.m}`;
        now.s = now.s < 10 ? `0${now.s}` : `${now.s}`;
        now.d = now.d < 10 ? `0${now.d}` : `${now.d}`;

        now.h0 = now.h[0];
        now.h1 = now.h[1];
        now.m0 = now.m[0];
        now.m1 = now.m[1];
        now.s0 = now.s[0];
        now.s1 = now.s[1];
        now.d0 = now.d[0];
        now.d1 = now.d[1];

        for (const t of Object.keys(els)) {
          for (const i of ["0", "1"]) {
            const curr = now[`${t}${i}`];
            let next = +curr - 1;
            if (next === -1) {
              next = 9;
            }
            if (t === "h") {
              if (i === "0") next = next <= 2 ? `${next}` : "0";
              if (i === "1") next = next <= 3 ? `${next}` : "0";
            }
            if (t === "m") {
              if (i === "0") next = next <= 5 ? `${next}` : "0";
              if (i === "1") next = next <= 9 ? `${next}` : "0";
            }
            if (t === "s") {
              if (i === "0") next = next <= 5 ? `${next}` : "0";
              if (i === "1") next = next <= 9 ? `${next}` : "0";
            }
            const el = els[t][i];
            if (el && el.digit) {
              if (!el.digit.dataset.digitBefore) {
                el.digit.dataset.digitBefore = curr;
                el.cardFaceA.textContent = el.digit.dataset.digitBefore;
                el.digit.dataset.digitAfter = next;
                el.cardFaceB.textContent = el.digit.dataset.digitAfter;
              } else if (el.digit.dataset.digitBefore !== curr) {
                el.card.addEventListener(
                  "transitionend",
                  function () {
                    el.digit.dataset.digitBefore = curr;
                    el.cardFaceA.textContent = el.digit.dataset.digitBefore;

                    const cardClone = el.card.cloneNode(true);
                    cardClone.classList.remove("flipped");
                    el.card.replaceWith(cardClone);
                    // var parent = el.card.parentElement;
                    // parent.replaceChild(cardClone , el.card)
                    el.card = cardClone;
                    el.cardFaces = el.card.querySelectorAll(".card-face");
                    el.cardFaceA = el.cardFaces[0];
                    el.cardFaceB = el.cardFaces[1];

                    el.digit.dataset.digitAfter = next;
                    el.cardFaceB.textContent = el.digit.dataset.digitAfter;
                  },
                  { once: true }
                );
                if (!el.card.classList.contains("flipped")) {
                  el.card.classList.add("flipped");
                }
              }
            }
          }
        }
      }
      setTimeout(runClock, 1000);
    })();
  });

  function initElements(type) {
    const els = [{}, {}];

    if (!["s", "m", "h", "d"].includes(type)) return els;

    const target = document.querySelector(`.flip-clock-${type}`);

    if (!target) return els;

    let el;

    el = els[0];
    el.digit = target.querySelector(".digit-left");
    el.card = el.digit.querySelector(".card");
    el.cardFaces = el.card.querySelectorAll(".card-face");
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];

    el = els[1];
    el.digit = target.querySelector(".digit-right");
    el.card = el.digit.querySelector(".card");
    el.cardFaces = el.card.querySelectorAll(".card-face");
    el.cardFaceA = el.cardFaces[0];
    el.cardFaceB = el.cardFaces[1];

    return els;
  }

  return (
    <div className="flip-clock-container">
      <div className="flip-clock flip-clock-d">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>
      <div className="colon">:</div>
      <div className="flip-clock flip-clock-h">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>

      <div className="colon">:</div>

      <div className="flip-clock flip-clock-m">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>

      <div className="colon">:</div>

      <div className="flip-clock flip-clock-s">
        <div className="digit digit-left">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
        <div className="digit digit-right">
          <div className="card">
            <div className="card-face card-face-front"></div>
            <div className="card-face card-face-back"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
