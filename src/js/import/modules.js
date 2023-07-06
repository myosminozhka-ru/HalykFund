import FlatpickrConfig from "./flatpickrConfig";
import ModalPlayer from "./modalPlayer";
import ModalPhoto from "./modalPhoto";
import Modal from "./Modal";
import phoneMask from "./phoneMask";
import Header from "%modules%/header/header";
import "%modules%/footer/footer";
import SliderDirections from "%modules%/directions/index";
import SliderBannerMain from "%modules%/banner-main/index";
import SliderContests from "%modules%/contests/index";
import SliderMembers from "%modules%/members/index";
import SliderHistoryMain from "%modules%/history-main/index";
import SliderPartnersMain from "%modules%/partners-main/index";
import SliderGrid from "%modules%/slider-grid/index";
import SvgAnime from "%modules%/anime-card/index";
import BannerParking from "%modules%/banner-parking/index";
import Search from "%modules%/search/index";
import select from "%modules%/select/index";
import SliderGallery from "%modules%/gallery-slider/index";
import SliderNewsAnother from "%modules%/news-another/index";
import Social from "%modules%/social/index";
import Accordion from "%modules%/accordion/index";
import contactUsForm from "%modules%/contact-us/index";
import subscribeForm from "%modules%/news-subs/index";
import requestForm from "%modules%/request/index";
import contestForm from "%modules%/info-block/index";
import SliderMedia from "%modules%/media-slider/index";
import Map from "%modules%/map/index";

FlatpickrConfig.setLang()

window.app = {
  header: new Header(),

  // sliders
  sliderDirections: new SliderDirections(),
  sliderBannerMain: new SliderBannerMain(),
  sliderContests: new SliderContests(),
  sliderMembers: new SliderMembers(),
  sliderHistoryMain: new SliderHistoryMain(),
  sliderPartnersMain: new SliderPartnersMain(),
  sliderGrid: new SliderGrid(),
  sliderMedia: new SliderMedia(),
  sliderGallery: new SliderGallery(),
  sliderNewsAnother: new SliderNewsAnother(),

  // animation
  svgAnime: new SvgAnime(),
  bannerParking: new BannerParking(),

  
  search: new Search(),
  select: select(),
  social: new Social(),
  accordion: Accordion(),
  modalPlayer: new ModalPlayer(),
  photoPlayer: new ModalPhoto(),
  videoModal: new Modal('video'),
  photoModal: new Modal('photo'),
  map: new Map(),
  mapModal: new Modal('map', false),
  phoneMask: phoneMask('[type="tel"]'),

  // forms
  contact_us: contactUsForm(),
  subscribe: subscribeForm(),
  request: requestForm(),
  contest: contestForm(),
}