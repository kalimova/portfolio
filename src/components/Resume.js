import React from "react";

const Resume = () => {
  return (
    <>
      <section className="resume">
        <div className="container">
          <div className="resume__boxes">
            <div className="resume__box">
              <div className="img">
                <img
                  src="https://masterpiecer-images.s3.yandex.net/f89e019bad7811ee9ef08e8848d31885:upscaled"
                  alt="wei"
                />
              </div>
              <div className="info text-white">
                <i class="fa-solid fa-phone "> +996 770 03-18-03</i>
                <br></br>
                <a href="#">
                  <i class="fa-solid fa-envelope">alina.kalimova@mail.ru</i>
                </a>
                <h3 className="title">Навыки:</h3>
                <div className="resume__skills">
                  <p>
                    <i class="fa-solid fa-check"></i>HTML5,CSS3
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i>Java Script
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i>React
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i>Tailwind
                  </p>
                  <p>
                    <i class="fa-solid fa-check"></i>Git, GitHub
                  </p>
                </div>
              </div>
              <div className="education text-white">
                <h3 className="title">ADA courses</h3>
                <p>Frontend Deeveloper</p>
                <h3 className="title">КГМА ИМ. АХУНБАЕВА</h3>
                <p>Фармацация</p>
                <h3 className="title">Языки</h3>
                <p>Английский (B-1)</p>
              </div>
            </div>
            <div className="about">
              <h1 className="title1">Алина Калимова</h1>
              <div>
                МЕДИЦИНСКИЙ ПРЕДСТАВИТЕЛЬ Merck KGaA (Бишкек) 2020-2022
                <li>
                  Продвижение препаратов компании 
                  <li>
                    Работа с опинион лидерами, проведение круглых столов,
                    участие в медицинских конференциях
                  </li>
                  <li>
                    Выполнение командных и личных KPI, проведение
                    внутрикомандных семинаров и тимбилдингов
                  </li>
                </li>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
