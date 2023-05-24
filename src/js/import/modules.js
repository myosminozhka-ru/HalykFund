import FlatpickrConfig from "./flatpickrConfig";
import Header from "%modules%/header/header";
import "%modules%/footer/footer";
import SliderDirections from "%modules%/directions/index";
import SliderBannerMain from "%modules%/banner-main/index";
import SliderContests from "%modules%/contests/index";
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

FlatpickrConfig.setLang()

window.app = {
  header: new Header(),
  sliderDirections: new SliderDirections(),
  sliderBannerMain: new SliderBannerMain(),
  sliderContests: new SliderContests(),
  sliderHistoryMain: new SliderHistoryMain(),
  sliderPartnersMain: new SliderPartnersMain(),
  sliderGrid: new SliderGrid(),
  svgAnime: new SvgAnime(),
  bannerParking: new BannerParking(),
  search: new Search(),
  select: select(),
  sliderGallery: new SliderGallery(),
  sliderNewsAnother: new SliderNewsAnother(),
  social: new Social(),
  accordion: Accordion(),
  contact_us: contactUsForm(),
  subscribe: subscribeForm(),
  request: requestForm(),
  contest: contestForm(),
}