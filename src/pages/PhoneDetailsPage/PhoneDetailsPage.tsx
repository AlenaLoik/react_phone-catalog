import React from 'react';
import './PhoneDetailsPage.scss';
import { SliderWithItems } from '../../components/SliderWithItems/SliderWithItems';
import { IProduct} from '../../interfase/interfase';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  items: IProduct[];
}

export const PhoneDetailsPage: React.FC<Props> = ({ items }) => {
  const likeItems = items.sort((a, b) => b.price - a.price);
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const itemId: string = searchParams.get('itemId') || "";
  //const [itemDetails, setItemDetails] = useState<IProductDetails>({} as IProductDetails);
  // useEffect(() => {
  //   getDetails(item.id).then((itemDetails) => {
  //     setItemDetails(itemDetails)
  //   })
  // }, []);



  return (
    <>
      <section className="nav-location">
        <Link to="/" className="nav-location__svg--home">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.59087 0.807088C7.83161 0.619846 8.16872 0.619846 8.40946 0.807088L14.4095 5.47375C14.5718 5.60006 14.6668 5.79426 14.6668 5.99999V13.3333C14.6668 13.8638 14.4561 14.3725 14.081 14.7475C13.706 15.1226 13.1973 15.3333 12.6668 15.3333H3.3335C2.80306 15.3333 2.29436 15.1226 1.91928 14.7475C1.54421 14.3725 1.3335 13.8638 1.3335 13.3333V5.99999C1.3335 5.79426 1.42848 5.60006 1.59087 5.47375L7.59087 0.807088ZM2.66683 6.32605V13.3333C2.66683 13.5101 2.73707 13.6797 2.86209 13.8047C2.98712 13.9298 3.15669 14 3.3335 14H12.6668C12.8436 14 13.0132 13.9298 13.1382 13.8047C13.2633 13.6797 13.3335 13.5101 13.3335 13.3333V6.32605L8.00016 2.1779L2.66683 6.32605Z" fill="#313237" />
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.3335 8.00001C5.3335 7.63182 5.63197 7.33334 6.00016 7.33334H10.0002C10.3684 7.33334 10.6668 7.63182 10.6668 8.00001V14.6667C10.6668 15.0349 10.3684 15.3333 10.0002 15.3333C9.63197 15.3333 9.3335 15.0349 9.3335 14.6667V8.66668H6.66683V14.6667C6.66683 15.0349 6.36835 15.3333 6.00016 15.3333C5.63197 15.3333 5.3335 15.0349 5.3335 14.6667V8.00001Z" fill="#313237" />
          </svg>
        </Link>
        <div className="nav-location__svg--arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" fill="#313237" />
          </svg>
        </div>
        <Link to="/phones">
          <p className="nav-location__text">Phones</p>
        </Link>
        <div className="nav-location__svg--arrow">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" fill="#313237" />
          </svg>
        </div>
        <p className="nav-location__text">{itemId}</p>
      </section>
      <section className="nav-location">
        <div className="nav-location__svg--arrow nav-location__svg--arrow--back">
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.528514 5.47124C0.268165 5.21089 0.268165 4.78878 0.528514 4.52843L4.52851 0.528433C4.78886 0.268083 5.21097 0.268083 5.47132 0.528433L9.47132 4.52843C9.73167 4.78878 9.73167 5.21089 9.47132 5.47124C9.21097 5.73159 8.78886 5.73159 8.52851 5.47124L4.99992 1.94265L1.47132 5.47124C1.21097 5.73159 0.788864 5.73159 0.528514 5.47124Z" fill="#313237" />
          </svg>
        </div>
        <Link to="/phones">
          <p className="nav-location__text--back">Back</p>
        </Link>
      </section>
      <h1>{itemId}</h1>
      {/* <div className="imeges phone__imeges">
        <div className="imeges__small"></div>
        <div className="imeges__main"></div>
      </div>
      <section className="details phone__details">
      <span className="item__price">
        <p className="item__price--discount">{priceWithDiscount}</p>
        <p className="item__price--value">{(price$ === priceWithDiscount)
          ? '' : price$}</p>
      </span>
      <div className="description item__description">
        <span className="description__screen">
          <p className="item__description__screen--title">Screen</p>
          <p className="item__description__screen--value">{screen}</p>
        </span>
        <span className="description__capacity">
          <p className="description__screen--title">Capacity</p>
          <p className="description__screen--value">{capacity}</p>
        </span>
        <span className="description__ram">
          <p className="description__screen--title">ram</p>
          <p className="description__screen--value">{ram}</p>
        </span>
      </div>
      <div className="item__button">
        <input
          className={false ? "item__button--add active" : "item__button--add"}
          type="button"
          // value={itemOnBascket ? "Remuve from cart" : "Add to cart"}
          value="Add to cart"

        />
        <button
          className="item__button--favorites"
          type="button" >
          <svg className="item__button--svg" version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="16" height="16" viewBox="0 0 1280.000000 1189.000000"
              preserveAspectRatio="xMidYMid meet">
              <metadata>
              </metadata>
              <g transform="translate(0.000000,1189.000000) scale(0.100000,-0.100000)"
              >
                <path d="M3250 11884 c-25 -2 -106 -11 -180 -20 -1485 -172 -2704 -1295 -3001
-2764 -133 -660 -67 -1507 171 -2223 252 -753 675 -1411 1397 -2172 342 -360
634 -630 1588 -1470 231 -203 488 -430 570 -505 1024 -920 1735 -1692 2346
-2547 l130 -183 132 0 132 1 130 192 c557 822 1212 1560 2185 2461 191 178
408 373 1027 923 956 852 1445 1343 1841 1850 643 825 968 1603 1064 2553 19
196 17 665 -5 835 -105 805 -441 1497 -998 2054 -557 557 -1250 894 -2054 998
-193 24 -613 24 -810 0 -733 -93 -1379 -387 -1920 -874 -191 -172 -406 -417
-535 -610 -30 -45 -57 -82 -60 -82 -3 0 -30 37 -60 82 -129 193 -344 438 -535
610 -531 478 -1170 773 -1878 867 -146 20 -562 34 -677 24z"/>
              </g>
            </svg>
            {/* <svg className="item__button--active" width="16" height="14" viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.62852 0.631371C10.1584 0.411797 10.7264 0.298782 11.3
        0.298782C11.8737 0.298782 12.4416 0.411797 12.9716
        0.631371C13.5015 0.850945 13.983 1.17277 14.3885
        1.57847C14.7941 1.98394 15.1158 2.46532 15.3353
        2.99514C15.5549 3.52506 15.6679 4.09305 15.6679 4.66667C15.6679
        5.24028 15.5549 5.80827 15.3353 6.33819C15.1158 6.86806 14.794
        7.34949 14.3884 7.75497C14.3883 7.75501 14.3884 7.75493 14.3884
        7.75497L8.49502 13.6483C8.22165 13.9217 7.77844 13.9217 7.50507
        13.6483L1.61174 7.75497C0.792668 6.9359 0.33252 5.82501 0.33252
        4.66667C0.33252 3.50833 0.792668 2.39743 1.61174 1.57836C2.43081
        0.759288 3.54171 0.299139 4.70005 0.299139C5.85839 0.299139
        6.96928 0.759288 7.78835 1.57836L8.00005 1.79005L8.21162
        1.57847C8.21166 1.57844 8.21158 1.57851 8.21162 1.57847C8.61711
        1.17283 9.09865 0.850924 9.62852 0.631371ZM13.3983 2.56819C13.1228
        2.29256 12.7957 2.07392 12.4357 1.92474C12.0756 1.77556 11.6898
        1.69878 11.3 1.69878C10.9103 1.69878 10.5245 1.77556 10.1644
        1.92474C9.80441 2.07392 9.4773 2.29256 9.2018 2.56819L8.49502
        3.27497C8.22165 3.54834 7.77844 3.54834 7.50507 3.27497L6.7984
        2.56831C6.24189 2.01179 5.48708 1.69914 4.70005 1.69914C3.91301
        1.69914 3.15821 2.01179 2.60169 2.56831C2.04517 3.12483 1.73252
        3.87963 1.73252 4.66667C1.73252 5.4537 2.04517 6.20851 2.60169
        6.76502L8.00005 12.1634L13.3984 6.76502C13.674 6.48953 13.8928
        6.16231 14.042 5.80228C14.1911 5.44226 14.2679 5.05637 14.2679
        4.66667C14.2679 4.27696 14.1911 3.89107 14.042 3.53105C13.8928
        3.17103 13.6739 2.84369 13.3983 2.56819Z" />
            </svg> */}
        {/* </button>
      </div>
      </section> */}
      <SliderWithItems title={"You may also like"} itemsForSlider={likeItems} />
    </>
  );
}
