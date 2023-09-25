const images = {
    img1: new URL('../assets/react.svg', import.meta.url).href,
    mailLogo: new URL('../assets/mailLogo.svg', import.meta.url).href,
    wappLogo: new URL('../assets/wappLogo.svg', import.meta.url).href,
    logo: new URL('./logo.svg', import.meta.url).href,
    icons: {
        fb: new URL('./icons/fbicon.svg', import.meta.url).href,
        tweet: new URL('./icons/tweeticon.svg', import.meta.url).href,
        linkdin: new URL('./icons/linkdinicon.svg', import.meta.url).href,
        insta: new URL('./icons/instaicon.svg', import.meta.url).href
    },
    banner: new URL('./banner.svg', import.meta.url).href,
    slide: {
        slider1: new URL('./slider/slider1.svg', import.meta.url).href,
        slider2: new URL('./slider/slider2.svg', import.meta.url).href,
        slider3: new URL('./slider/slider3.svg', import.meta.url).href,
        slider4: new URL('./slider/slider4.svg', import.meta.url).href,
    },
    service: {
        modern: new URL('./service/modern.png', import.meta.url).href,
        national: new URL('./service/national.png', import.meta.url).href,
        supply: new URL('./service/supply.png', import.meta.url).href,
    }

}
export default images