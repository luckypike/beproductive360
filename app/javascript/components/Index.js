import React from 'react';
import PropTypes from 'prop-types';

import axios from 'axios';

import Logo from '../images/logo.svg';

import MinecLogo from '../images/partners/minec.svg';
import RALogo from '../images/partners/rosatom.svg';
import NizLogo from '../images/partners/niz.svg';
import TassLogo from '../images/partners/tass.svg';


import {
  Link
} from 'react-router-dom';

import 'swiper/dist/css/swiper.css';
import Swiper from 'swiper';

function JoinLink(props) {
  return (
    <Link to={props.join_path}>
      Зарегистрироваться
    </Link>
  );
}

function MembersLink(props) {
  return (
    <a href={props.members_path}>
      Зарегистрироваться
    </a>
  );
}

function Party(props) {
  return (
    <div className="party">
      <p>Участники:</p>
      <div>Количество зарегистрированных участников: {props.members.length}</div>
      <div className="party_list">

        { props.members.map((m, index) =>
          <PartyMember key={index} member={m}/>
        )}
      </div>
      <div className="party_show">Показать всех участников</div>
    </div>
  );
}

function PartyMember(props) {
  return (
    <div className="party_member">
      <div className="member_avatar" dangerouslySetInnerHTML={{__html: props.member.avatar}} />
      <div className="member_name">
        {props.member.last_name}
        <br />
        {props.member.first_name}
      </div>
    </div>
  );
}

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lections: null
    }

    this.swipers = undefined;
  }

  componentDidMount() {
    this.fetchLections();
    this.fetchMembers();
  }

  componentWillUnmount() {
  }

  fetchLections() {
    axios.get(this.props.list_lections_path + '.json')
      .then(res => {
        let lections = {};
        res.data.map((l) =>  {
          lections[l.id] = l;
        });


        this.setState({
          lections: lections
        }, function() {
          const swipers = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
            },
            on: {
              slideChange: function (){
                Array.from(document.getElementsByClassName("party_show_active")).forEach(function(item) {
                  console.log(item);
                  item.click();
                });
              }
            }
          });

          this.swipers = swipers;
        });
      });
  }

  fetchMembers() {
    axios.get(this.props.list_members_path + '.json')
      .then(res => {

        this.setState({
          members: res.data
        });
      });
  }

  changeActiveSlide = (s, i, e) => {
    if(e.target.classList.contains('meta_nav_item')){
      this.swipers[s].slideTo(i);
      let ii = e.target.closest('.meta_nav').children;
      for (var i=0, child; child=ii[i]; i++) {
        child.classList.remove('active');
      }
      e.target.classList.add('active');
    }
  }

  render () {
    const lections = this.state.lections;
    let industry = [];
    let goverment = [];
    let medical = [];
    let education = [];
    let social = [];
    let building = [];
    if (this.state.members !== undefined) {
      industry = this.state.members.filter((m) => m.session == "industry");
      goverment = this.state.members.filter((m) => m.session == "goverment");
      medical = this.state.members.filter((m) => m.session == "medical");
      education = this.state.members.filter((m) => m.session == "education");
      social = this.state.members.filter((m) => m.session == "social");
      building = this.state.members.filter((m) => m.session == "building");
    }
    return (
      <div className="page page_index">
        <div className="page_index_header_wrapper">
          <div className="page_index_header">
            <div className="logo">
              <img src={Logo} />
            </div>

            <div className="qwe">
              <div className="place">
                <span className="date">
                  16 - 17 мая
                </span>
                <br />
                Нижний Новгород
              </div>

              <div className="join">
                {this.props.auth ? (
                  <MembersLink {...this.props} />
                ) : (
                  <JoinLink {...this.props} />
                )}
              </div>
            </div>

            <div className="partners">
              <div className="partners_g">
                <div className="label">Генеральный партнер</div>
                <div className="partners_g_item">
                  <img src={RALogo} />
                </div>
              </div>
              <div className="partners_g">
                <div className="label cn">Организаторы</div>
                <div className="partners_g_item">
                  <img src={MinecLogo} />
                </div>
                <div className="partners_g_item">
                  <img src={NizLogo} />
                </div>
              </div>
              <div className="partners_g">
                <div className="label">Информационный партнер</div>
                <div className="partners_g_item">
                  <img src={TassLogo} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page_index_intro">
          <div className="who">
            Форум соберет инициативные группы для обмена опытом
            и обсуждения рабочих вопросов в рамках реализации национальной инициативы «Повышение производительности труда и поддержка занятости»
          </div>
        </div>

        <div className="page_index_shuttle">
          <div className="text">
            <p>
              Информация по шаттлам в дни проведения Форума
            </p>
            <p>
              <b>16.05:</b>
            </p>

            <ul>
              <li>Время отправления шаттлов от аккредитованных отелей до площадки Форума (Технопарк Анкудиновка, ул. Академика Сахарова, д. 4): 10:20 -10:50. Просим участников быть готовыми к отправлению в 10:20! </li>
            </ul>
            <p>
              <b>17.05:</b>
            </p>
            <ul>
              <li>Время отправления шаттлов на деловой завтрак в отеле Sheraton (Театральная площадь, 1) от аккредитованных отелей: 8:35 - 8:45</li>
              <li>Время отправления шаттлов на экскурсии от отеля Sheraton: с 10:00</li>
              <li>В зоне ресепшн аккредитованных отелей присутствуют волонтеры в футболках с логотипом форума, которые координируют делегатов по времени и месту отправления шаттлов до площадки Форума.</li>
            </ul>
          </div>
        </div>

        <div className="page_index_schedule">
          <div className="title">
            <h1>
              Программа форума
            </h1>
          </div>

          <div className="days">
            <div className="days_item second">
              <div className="date">
                <span>16</span> мая, среда
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    08:00 – 11:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Прибытие, размещение и регистрация участников
                  </div>

                  <div className="section_content_place">
                    Отели Нижнего Новгорода
                  </div>

                  <div className="section_content_item">
                    <p>
                      В зоне ресепшн аккредитованных отелей присутствуют волонтеры в футболках с логотипом форума, которые координируют делегатов по времени и месту отправления шаттлов до площадки Форума.
                    </p>
                    <p>
                      Время отправления шаттлов: с 10:30 до  10:50 от аккредитованных отелей до технопарка «Анкудиновка»
                    </p>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    11:00 – 12:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Регистрация участников Форума, приветственный кофе
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    12:00 – 12:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Торжественное открытие Форума
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>

                  <div className="section_content_item with_bl">
                    Никитин Г.С., Врио Губернатора Нижегородской области
                  </div>

                  <div className="section_content_item with_bl">
                    Орешкин М.С., и. о. Министра экономического развития Российской Федерации
                  </div>

                  <div className="section_content_item with_bl">
                    Лихачёв А.Е., генеральный директор Государственной корпорации по атомной энергии «Росатом»
                  </div>
                </div>
              </div>

              {lections &&
                <div className="section">
                  <div className="section_time">
                    <span>
                      12:45 – 14:30
                    </span>
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Сессия 1: Истории успеха и цели
                    </div>

                    <div className="section_content_place">
                      Технопарк «Анкудиновка»
                    </div>

                    <div className="section_content_item slider_nav">
                      <div className="meta_nav">
                        <div className="meta_nav_item goverment active" onClick={(e) => this.changeActiveSlide(0, 0, e)}>
                          Государственное управление
                        </div>
                        <div className="meta_nav_item industry" onClick={(e) => this.changeActiveSlide(0, 1, e)}>
                          Промышленность
                        </div>
                        <div className="meta_nav_item building" onClick={(e) => this.changeActiveSlide(0, 2, e)}>
                          Строительство
                        </div>
                        <div className="meta_nav_item medical" onClick={(e) => this.changeActiveSlide(0, 3, e)}>
                          Здравоохранение
                        </div>
                        <div className="meta_nav_item education" onClick={(e) => this.changeActiveSlide(0, 4, e)}>
                          Образование
                        </div>
                        <div className="meta_nav_item social" onClick={(e) => this.changeActiveSlide(0, 5, e)}>
                          Социальная защита
                        </div>
                      </div>
                    </div>

                    <div className="section_content_slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item goverment">Государственное управление</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[1].text_md}} />
                            <Party members={goverment}/>
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item industry">Промышленность</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[3].text_md}} />
                            <Party members={industry}/>
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item building">Строительство</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[5].text_md}} />
                            <Party members={building}/>
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item medical">Здравоохранение</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[7].text_md}} />
                            <Party members={medical}/>
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item education">Образование</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[9].text_md}} />
                            <Party members={education}/>
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item social">Социальная защита</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[12].text_md}} />
                            <Party members={social}/>
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>

                      </div>
                    </div>
                  </div>
                </div>
              }

              <div className="section">
                <div className="section_time">
                  <span>
                    14:30 – 15:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title">
                    Обед
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    16:00 – 17:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Пленарное заседание Форума
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>

                  <div className="section_content_item with_bl">
                    Модератор: определяется
                  </div>

                  <div className="section_content_item with_bl">
                    Спикеры:
                    <ul>
                      <li>
                        Андреев А.Г., генеральный директор ОАО ПНППК;
                      </li>
                      <li>
                        Когогин C.А., генеральный директор ПАО «КамАз»;
                      </li>
                      <li>
                        Никитин Г.С., Врио Губернатора Нижегородской области;
                      </li>
                      <li>
                        Орешкин М.С., и. о. Министра экономического развития Российской Федерации;
                      </li>
                      <li>
                        Чупшева С.В., генеральный директор Агентства стратегических инициатив;
                      </li>
                      <li>
                        Шмелева Е.В., руководитель Фонда «Талант и успех».
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    17:30 – 18:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title">
                    Кофе-брейк
                  </div>
                </div>
              </div>

              {lections &&
                <div className="section">
                  <div className="section_time">
                    <span>
                      18:00 – 19:00
                    </span>
                  </div>

                  <div className="section_content">
                    <div className="section_content_title bld">
                      Сессия 2: Барьеры и направления действий
                    </div>

                    <div className="section_content_place">
                      Технопарк «Анкудиновка»
                    </div>

                    <div className="section_content_item slider_nav">
                      <div className="meta_nav">
                        <div className="meta_nav_item goverment active" onClick={(e) => this.changeActiveSlide(1, 0, e)}>
                          Государственное управление
                        </div>
                        <div className="meta_nav_item industry" onClick={(e) => this.changeActiveSlide(1, 1, e)}>
                          Промышленность
                        </div>
                        <div className="meta_nav_item building" onClick={(e) => this.changeActiveSlide(1, 2, e)}>
                          Строительство
                        </div>
                        <div className="meta_nav_item medical" onClick={(e) => this.changeActiveSlide(1, 3, e)}>
                          Здравоохранение
                        </div>
                        <div className="meta_nav_item education" onClick={(e) => this.changeActiveSlide(1, 4, e)}>
                          Образование
                        </div>
                        <div className="meta_nav_item social" onClick={(e) => this.changeActiveSlide(1, 5, e)}>
                          Социальная защита
                        </div>
                      </div>
                    </div>

                    <div className="section_content_slider">
                      <div className="swiper-container">
                        <div className="swiper-wrapper">
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item goverment">Государственное управление</div>
                            </div>

                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[2].text_md}} />
                            <Party members={goverment}/>
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item industry">Промышленность</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[4].text_md}} />
                            <Party members={industry}/>
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item building">Строительство</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[6].text_md}} />
                            <Party members={building}/>
                          </div>

                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item medical">Здравоохранение</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[8].text_md}} />
                            <Party members={medical}/>
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item education">Образование</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[10].text_md}} />
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[11].text_md}} />
                            <Party members={education}/>
                          </div>
                          <div className="section_content_item swiper-slide">
                            <div className="meta">
                              <div className="meta_item social">Социальная защита</div>
                            </div>
                            <div className="desc" dangerouslySetInnerHTML={{__html: lections[13].text_md}} />
                            <Party members={social}/>
                          </div>
                        </div>

                        <div className="swiper-pagination"></div>
                      </div>
                    </div>
                  </div>
                </div>
              }

              <div className="section">
                <div className="section_time">
                  <span>
                    19:15 – 20:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Подведение итогов дня
                  </div>

                  <div className="section_content_place">
                    Технопарк «Анкудиновка»
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    20:30 – 22:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Торжественный ужин
                  </div>

                  <div className="section_content_place">
                    Концертный зал Премио
                  </div>

                  <div className="section_content_item">
                    Приветствие Губернатора и подведение итогов Форума
                  </div>
                </div>
              </div>
            </div>

            <div className="days_item first">
              <div className="date">
                <span>17</span> мая, четверг
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    09:00 – 10:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Деловой завтрак
                  </div>

                  <div className="section_content_place">
                    Отель Sheraton
                  </div>

                  <div className="section_content_item">
                    <p>
                      Обсуждение итогов Форума (по направлениям: Государственное управление; Промышленность; Строительство; Здравоохранение; Образование; Социальная защита)
                    </p>

                    <p>
                      В зоне ресепшн аккредитованных отелей присутствуют волонтеры в футболках с логотипом форума, которые координируют делегатов по времени и месту отправления шаттлов до площадки Форума.
                    </p>

                    <p>
                      Время отправления шаттлов: с 09:00 до 09:20 от отелей Кулибин, Courtyard by Mariott, Hampton by Hilton, Ibis до отеля Sheraton
                    </p>
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    11:00 — 14:30
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Осмотр и обсуждение образцов Нижегородской области
                  </div>

                  <div className="section_content_item">
                    Время отправления шаттлов: с 10:30 до 10:50 от отеля Sheraton 5* до организаций–образцов Нижегородской области
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Правительство</b> (проектный офис правительства Нижегородской области)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Предприятие ГК «Росатом»</b> (АО «ОКБМ Африкантов»;)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Предприятие приоритетной программы</b> (ЗАО «Узола»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Оптимизированный офис</b> (АО «Гринатом»)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Школа</b> (Православная гимназия им. Александра Невского)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Бережливые поликлиники</b> (Детская городская поликлиника №39, Городская поликлиника №7)
                  </div>

                  <div className="section_content_item with_bl">
                    <b>Строительство</b> (Инжиниринговая компания Атомстройэкспорт)
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    15:00 – 17:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title bld">
                    Совещание по результатам исполнения стратегических инициатив Губернатора Нижегородской области
                  </div>

                  <div className="section_content_item">
                    (участие по приглашениям)
                  </div>
                </div>
              </div>

              <div className="section">
                <div className="section_time">
                  <span>
                    с 17:00
                  </span>
                </div>

                <div className="section_content">
                  <div className="section_content_title">
                    Отъезд участников Форума
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page_index_logistics">
          <div className="in">
            <div className="in_title">
              Как добраться
            </div>
            <div className="in_list">
              <div className="in_list_item">
                <div className="icons air">
                  1 час
                </div>

                <div className="desc">
                  <strong>От аэропорта</strong>
                  <br />
                  На такси время в пути до исторического центра пл. Минина 1 час. Используйте популярные приложения Яндекс Такси, Uber,  Gett. Для более комфортной поездки закажите трансфер заранее в «Новое такси Нижегородец».
                </div>
              </div>

              <div className="in_list_item">
                <div className="icons rr">
                  20 мин.
                </div>

                <div className="desc">
                  <strong>От ж.-д. вокзала</strong>
                  <br />
                  Нижегородский железнодорожный вокзал практически полностью закрыт на реконструкцию. Строительные работы могут создать дискомфорт.  От вокзала до исторического центра можно добраться на такси или метро до станции Горьковская.
                </div>
              </div>
            </div>
          </div>

          <div className="hotels">
            <div className="hotels_title">
              Где разместиться
            </div>
            <div className="hotels_list">
              <div className="hotels_list_item">
                <div className="icons">
                  от 6900 руб.
                </div>

                <div className="desc">
                  <strong>Sheraton 5*</strong>
                  <br />
                  Расположен в центре Нижнего Новгорода, всего в 2 минутах ходьбы от входа в Кремль.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 5300 руб.
                </div>

                <div className="desc">
                  <strong>Кулибин 5*</strong>
                  <br />
                  Парк-отель «Кулибин» расположен в 2,5 км от Нижегородского кремля.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 6000 руб.
                </div>

                <div className="desc">
                  <strong>Courtyard by Mariott 4*</strong>
                  <br />
                  Отель с фитнес-центром находится в 20 минутах ходьбы от Нижегородского кремля.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 4505 руб.
                </div>

                <div className="desc">
                  <strong>Hampton by Hilton 3*</strong>
                  <br />
                  Расположен в культурно-исторической части Нижнего Новгорода, в 1,7 км от Нижегородского Кремля.
                </div>
              </div>

              <div className="hotels_list_item">
                <div className="icons">
                  от 3600 руб.
                </div>

                <div className="desc">
                  <strong>Ibis 3*</strong>
                  <br />
                  Современный отель расположен в Нижнем Новгороде, всего в 5 минутах ходьбы от Покровской улицы, исторического торгового центра города.
                </div>
              </div>
            </div>
          </div>

          <div className="objects">
            <div className="objects_title">
              Экскурсия по образцовым предприятиям Нижегородской области
            </div>
            <div className="objects_list">
              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    1
                  </div>
                  1,6 км
                </div>

                <div className="desc">
                  <strong>Проектный офис правительства Нижегородской области</strong>
                  <br />
                  Минина, 16А
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    2
                  </div>
                  9,6 км
                </div>

                <div className="desc">
                  <strong>АО «ОКБМ им Африкантова» ГК «Росатом»</strong>
                  <br />
                  Бурнаковский проезд, 15
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    3
                  </div>
                  37 км
                </div>

                <div className="desc">
                  <strong>ЗАО «Узола»</strong>
                  <br />
                  г. Балахна, ул. Строителей д. 2
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    4
                  </div>
                  14 км
                </div>

                <div className="desc">
                  <strong>ОАО «Гринатом»</strong>
                  <br />
                  Проспект Ленина, 93Г
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    5
                  </div>
                  3,8 км и 7,6 км
                </div>

                <div className="desc">
                  <strong>Детская городская поликлиника №39 и Городская поликлиника №7</strong>
                  <br />
                  Тимирязева, 5 и Верхне-Печерская, 6
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    6
                  </div>
                  9,7 км
                </div>

                <div className="desc">
                  <strong>Православная гимназия им. Александра Невского</strong>
                  <br />
                  Московское шоссе, 106а
                </div>
              </div>

              <div className="objects_list_item">
                <div className="icons">
                  <div className="i">
                    7
                  </div>
                  1,7 км
                </div>

                <div className="desc">
                  <strong>АО ИК «Атомстройэкспорт» ГК «Росатом»</strong>
                  <br />
                  Площадь Свободы, 3
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="page_index_place_wrapper">
          <div className="page_index_place">
            <div className="image"></div>
            <div className="text">
              <div className="title">
                Пленарное заседание Форума и тематические сессии
              </div>
              <div className="desc">
                <span>
                  Технопарк «Анкудиновка»
                </span>
                <br />
                ул. Академика Сахарова, 4
              </div>
            </div>
          </div>
        </div>

        <div className="page_index_partners">
          <div className="partners">
            <div className="partners_g">
              <div className="label">Генеральный партнер</div>
              <div className="partners_g_item">
                <img src={RALogo} />
              </div>
            </div>
            <div className="partners_g">
              <div className="label cn">Организаторы</div>
              <div className="partners_g_item">
                <img src={MinecLogo} />
              </div>
              <div className="partners_g_item">
                <img src={NizLogo} />
              </div>
            </div>
            <div className="partners_g">
              <div className="label">Информационный партнер</div>
              <div className="partners_g_item">
                <img src={TassLogo} />
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Index;
