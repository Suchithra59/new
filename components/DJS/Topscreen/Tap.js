import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const djOffers = {
 All: [
   {
     id: '1',
     title: 'DJ Remix King',
     offers: '$500 per event',
     discount: '10% off for first booking',
     description: 'High-energy mixes and a vast music library.',
     image: 'https://images.pexels.com/photos/2381596/pexels-photo-2381596.jpeg?cs=srgb&dl=pexels-cesar-de-miranda-1252217-2381596.jpg&fm=jpg',
     additionalImages: ['https://images.pexels.com/photos/2111015/pexels-photo-2111015.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://thumbs.dreamstime.com/b/mixing-mastery-close-up-dj-hands-controller-your-background-bussines-poster-wallpaper-banner-greeting-cards-317415248.jpg','https://cdn.pixabay.com/photo/2023/10/28/11/52/dj-8347229_1280.jpg']
   },
   {
     id: '2',
     title: 'DJ Night Owl',
     offers: '$700 per event',
     discount: 'Free setup and teardown',
     description: 'Perfect for night events with sound quality.',
     image: 'https://t3.ftcdn.net/jpg/01/10/11/00/360_F_110110063_4kxHX5YKcqrKqFz9udsaqmjkTCoOhKHc.jpg',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSVYuWlirfIx-Jo98fU9s0hYKY-tJWZjcWwANesj3jDYqE_6Pz1RtFeSg-MpaO6iUOnw8&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPhb-ny5obTPzYO0CDRWUBO53n3Lcxs1arslKprxg_4SKQqKmNHE-RCsFiGAOwpu6FyOs&usqp=CAU','https://img.redbull.com/images/c_fill,g_auto,w_450,h_600/q_auto:low,f_auto/redbullcom/2014/10/24/1331686452939_2/rb3style']
   },
   {
     id: '3',
     title: 'DJ Beats Master',
     offers: '$600 per event',
     discount: '15% discount for bookings over 5 events',
     description: 'Specializes in electronic and dance music.',
     image: 'https://media.istockphoto.com/id/890774964/photo/feeling-the-music.jpg?s=612x612&w=0&k=20&c=sxU1FTqhv4vbRo5KTtXA60WKDVpnanBb2qWfytk4rdA=',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJlNBL7ZQrIXHdsp41XYVBRNZMXlEZ2oJbnLt0UoRQ0gZmTT5DQDkpsYtbSSjlv5T1168&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaYUZYG05GNeiicmHpLiNK-XvlbCFIIN4LyPojDJSsDH7FHfW6tTSIsp0IT7stdVOzuRU&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrUZRyJW9wNvoQVmjW94RPIuc376G8yq1bsoedh9tNd-kPLkNjRZTOh9_-uAiR1KOlmkU&usqp=CAU']
   },
   {
     id: '4',
     title: 'DJ Party Starter',
     offers: '$750 per event',
     discount: 'Free consultation included',
     description: 'Get the party started with engaging beats.',
     image: 'https://thumbs.dreamstime.com/b/dj-mixer-headphones-nightclub-background-laser-light-show-31201789.jpg',
     additionalImages: ['https://c8.alamy.com/comp/2BW0B74/dj-mixer-2BW0B74.jpg', 'https://img.freepik.com/free-photo/dj-spinning-mixing-scratching-track-controls-dj-s-deck-strobe-dj-music-club-life-concept_627829-8276.jpg','https://thumbs.dreamstime.com/b/advanced-dj-mixer-console-neon-blue-accents-high-tech-sleek-design-features-knobs-sliders-enhancing-modern-329668931.jpg']
   },
   {
     id: '5',
     title: 'DJ Soundwave',
     offers: '$900 per event',
     discount: 'Package deal available',
     description: 'Offers custom playlists tailored to your event.',
     image: 'https://cdn.pixabay.com/photo/2023/11/21/10/34/ai-generated-8402927_640.png',
     additionalImages: ['https://burst.shopifycdn.com/photos/dark-close-up-of-a-dj-booth.jpg?width=1000&format=pjpg&exif=0&iptc=0', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7VTqcH17y-tUEi1wpw1qvCC0T_ilzmqLWe1K8qrHy5LCBlC29zRIEqpXOBXby87CGCbg&usqp=CAU','https://st4.depositphotos.com/1000904/24031/i/450/depositphotos_240314724-stock-photo-kiev-july-2018-retro-technics.jpg']
   },
   {
     id: '6',
     title: 'DJ Electric Vibe',
     offers: '$800 per event',
     discount: 'Free lighting with booking',
     description: 'Creates an atmosphere with stunning visuals.',
     image: 'https://media.gettyimages.com/id/112128298/photo/male-dj-using-decks.jpg?s=612x612&w=gi&k=20&c=1cH9oFiYME6GacA4iXbsspLQBR3-u05JdtIxwQZHc0w=',
     additionalImages: ['https://images.pexels.com/photos/860707/pexels-photo-860707.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500', 'https://www.shutterstock.com/image-photo/dj-mixing-music-deejay-controller-600nw-2245618865.jpg','https://cdn.pixabay.com/photo/2023/03/16/16/31/dj-7857071_1280.jpg']
   },
   {
     id: '7',
     title: 'DJ Sunset Groove',
     offers: '$650 per event',
     discount: '10% off for weekday events',
     description: 'Chill vibes for sunset and relaxed gatherings.',
     image: 'https://5core.com/cdn/shop/files/1a_d661ee8f-6693-45fc-8db1-5576ed8c5875.jpg?v=1726517690',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaoNdIunuJzMy8DX404O6gTIKbBRukFt1A2ZBVcH_pUtzTBtkHgMSK1a9qz65EkFmIayc&usqp=CAU', 'https://m.media-amazon.com/images/I/91e+HezNG8L._AC_UF1000,1000_QL80_.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWVIbjmmL7iL7Xfmf1cS2xI9yIm-IKJk6s8V9nXRMx7BCzYCNa5GLGk7oFzw7hbN8wRo0&usqp=CAU']
   },
   {
     id: '8',
     title: 'DJ Bass Drop',
     offers: '$700 per event',
     discount: 'Loyalty program available',
     description: 'Brings the bass to any event with sound.',
     image: 'https://5.imimg.com/data5/SELLER/Default/2022/4/ZU/JZ/BE/146060024/new-dj-prime-4-professional-channel-dj-mixer-dj-controller-500x500.jpg',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSX9l0qeZd_94InU9CfBVi4RBJ5uj1wxSSh8YoImVwtQmbEDu_9razUfWWx3YFEY-a568U&usqp=CAU', 'https://5.imimg.com/data5/SELLER/Default/2024/5/415665789/XV/DG/ON/153129402/xdj-rr-main-v2-500x500.png','https://www.cashconverters.co.uk/globalassets/catalogs/ed815655-f2e1-45b7-a7b6-b16900efe95e.jpg?width=800&height=600&rsampler=bicubic&compand=true&bgcolor=255,255,255,55&rmode=pad']
   },
   {
     id: '9',
     title: 'DJ Sky High',
     offers: '$850 per event',
     discount: '20% off for returning clients',
     description: 'A fan favorite, known for performances.',
     image: 'https://thumbs.dreamstime.com/b/audio-mixing-controller-dj-mixer-control-panel-equalizer-party-setting-audio-mixing-controller-dj-mixer-315475288.jpg',
     additionalImages: ['https://c8.alamy.com/comp/2BW0B74/dj-mixer-2BW0B74.jpg', 'https://images.picxy.com/cache/2020/3/21/a69eb831208bdb9f29bcb06835e394ea.jpg','https://img.freepik.com/premium-photo/hands-dj-mixing-playing-music-professional-controller-mixer_118086-2707.jpg']
   },
   {
     id: '10',
     title: 'DJ Night Breeze',
     offers: '$550 per event',
     discount: 'Free trial mix for first timers',
     description: 'Smooth mixes perfect for any night event.',
     image: 'https://as2.ftcdn.net/v2/jpg/03/14/20/65/1000_F_314206563_WIfB9RNJVa8XXSXGHTuGnOzMMcwLlkf7.jpg',
     additionalImages: ['https://media.gq-magazin.de/photos/5c9cd9636eff019c9efc65d9/16:9/w_1280,c_limit/dj_pult_quer.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNSYdeASObd38_bK46RoQuptUo9K0OZr9pEkdjd_85ChRSDxRddIoGO5qFeWtRQ0T3WEY&usqp=CAU','https://as2.ftcdn.net/v2/jpg/03/14/20/65/1000_F_314206563_WIfB9RNJVa8XXSXGHTuGnOzMMcwLlkf7.jpg']
   },
   {
     id: '11',
     title: 'DJ Funky Fresh',
     offers: '$950 per event',
     discount: 'Discount for referrals',
     description: 'Fresh and funky beats to keep the dancing.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSSEAAQbd01exUx9w6cV3ccVHW7tPj1YYQ8A&s',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2VkXM9T2X4KA0tF0c9FXApuKoKZYkTWZdwUxOTRfX1zzMNNZn-HBolbYpTXYaGmtNJw&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxrm71KXCI1_XjRRvl7oGctKjzLc5Hsz_ZdsziNJznEqoUA4x0kMisWJw1HVVAI-McBq0&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbRBRT30FL3_sMUnL8_knM_01Wqrx2dXEJef-62-SQwcVUTZ2xguHyyH4sFtbC1Y7Smrw&usqp=CAU']
   },
   {
     id: '12',
     title: 'DJ Disco Fever',
     offers: '$800 per event',
     discount: 'Early bird booking discount',
     description: 'Get the disco vibe with classic tracks and lights.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '13',
     title: 'DJ Chillax',
     offers: '$600 per event',
     discount: 'Free consultation included',
     description: 'Perfect for chill events and background music.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '14',
     title: 'DJ Rave Master',
     offers: '$1000 per event',
     discount: 'Group discount for events',
     description: 'Brings the rave experience with epic beats.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '15',
     title: 'DJ Techno Wizard',
     offers: '$750 per event',
     discount: 'Discount on multiple bookings',
     description: 'Masters of techno music, perfect for dance.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '16',
     title: 'DJ Mixologist',
     offers: '$850 per event',
     discount: 'Free upgrade for packages',
     description: 'Combines great music with a mixologist vibe.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '17',
     title: 'DJ Chill Out',
     offers: '$700 per event',
     discount: 'Loyalty rewards available',
     description: 'Perfect for relaxed, lounge-style events.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '18',
     title: 'DJ Dance Machine',
     offers: '$900 per event',
     discount: 'Free lighting upgrade',
     description: 'High-energy dance beats for any party.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '19',
     title: 'DJ Party Animal',
     offers: '$650 per event',
     discount: '10% off for early bookings',
     description: 'Known for getting the crowd dancing.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
   {
     id: '20',
     title: 'DJ Ultimate Party',
     offers: '$1100 per event',
     discount: 'Exclusive deals for events',
     description: 'The ultimate DJ experience for your event.',
     image: 'https://via.placeholder.com/150',
     additionalImages: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150']
   },
 ],
 Corporate: [
   {
     id: '21',
     title: 'Corporate DJ',
     offers: '$800 per event',
     discount: 'Free consultation and planning',
     description: 'Specializes in events with professionalism.',
     image: 'https://images-na.ssl-images-amazon.com/images/I/81-FZmbVPFL.jpg',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRY0c3CCKfo1s7UpCBYHGYA5L2gr3kVruUjZoKvS_0oc8i7FYAuHqv4H0fE9Y_7jYXbjU&usqp=CAU', 'https://images-na.ssl-images-amazon.com/images/I/81-FZmbVPFL.jpg','https://cdn.dotpe.in/longtail/item_thumbnails/5709047/d3La3xRl-800-800.webp']
   },
   {
     id: '22',
     title: 'Business Event DJ',
     offers: '$850 per event',
     discount: 'Discount for large groups',
     description: 'Tailored DJ services for business events.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRWTgVdfFXAr5xNm2J0v0hZp7-8eKvFJBimQ&s',
     additionalImages: ['https://img.freepik.com/premium-photo/dj-playing-music-mixer_169160-121.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPXYpX9e5ZLPyQb1CKbuUmgNmYzzlIr23yczqzPXZ_qA_360urYaffCcI939egYf8kuk&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQewRag3Z2wzqov_Zhs2YpVwA_662Npj0ulA8Jn2BLXsAhKRgo-ApFTwaWtziyepjYPD64&usqp=CAU']
   },
   {
     id: '23',
     title: 'Professional DJ',
     offers: '$900 per event',
     discount: 'Package deals available',
     description: 'Offers a touch to corporate functions.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRe6ts4X4vmraPFMHE2oMqGVZyJDuxZPkz3Q&s',
     additionalImages: ['https://www.shutterstock.com/image-photo/table-dj-260nw-358977560.jpg', 'https://www.shutterstock.com/image-photo/close-view-djs-hands-playing-260nw-2144794451.jpg','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQitRxpIGDfZ_BJHaA5fe97ePkHabD09g4WSP9yPbgsDKM7up1oUfU_Mo4I77a5mcARk3Y&usqp=CAU']
   },
   {
     id: '24',
     title: 'Corporate Gala DJ',
     offers: '$950 per event',
     discount: 'Early booking discount',
     description: 'Expertise in handling large corporate galas.',
     image: 'https://www.virtualdj.com/img/352271/24614/hwp_pioneer_ddjrev7.png',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBdKleFnuYYdjoHrADHhS_2u6cEjmhcpbt2DHonDWcuZfUn0k24gndhPbcd6S0S_DGr3Y&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4dQDvEVxiod8P9h-9lUFpst6OF2Us6RjxypRCmTVXoGoEHlyOwby4MR_kDcv382w3MKU&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfwdflEw-I0A0SZSZrcoM1vFui7AvPnjKsp3tgsazIsz0wooF8_I_DsiFht5h-2ofo-yc&usqp=CAU']
   },
 ],
 Wedding: [
   {
     id: '25',
     title: 'Wedding DJ',
     offers: '$1000 per event',
     discount: 'Free consultation for wedding planning',
     description: 'Specializes in creating the perfect wedding.',
     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7INk26wpfhYwX7aIQhhfmGGkIpu0RYX0cTQ&s',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD3X7hGoLuZ5BqKHWmj8oSmkIeJDtWMvYt4oESRbKqYBtikezyIBfa8EDgXV3HvRxHygc&usqp=CAU', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdIszWJ1VMaytavKbkrQUpxRy1X51uRzKd0PhaHRYdHxje6RfTLE_jnUbWrLRxeptyamI&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgQIygoYPQatU112HbQvPCxqvLL96EgAmqz8Wzk7DxtIBmgwM56bJlpH86Qr9zpCD5pPo&usqp=CAU']
   },
   {
     id: '26',
     title: 'Romantic DJ',
     offers: '$1100 per event',
     discount: 'Special packages for couples',
     description: 'Creates a romantic ambiance for your day.',
     image: 'https://hollywooddj.com/cdn/shop/articles/DJ-Wedding-DJ.jpg?v=1669054984',
     additionalImages: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEL3JuJ3peva917_v7e0-1vl80_d5knCGAA&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlOpH1Zw07kN7PvsqvhijzBEbjo68A4aZCz5L50Bts-t_nS9UkLqVguA8mc4vSeJ1bRSg&usqp=CAU','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr3M453udv9UzmkF1GRZSqCEn7Zkk4G33kH-UwATfO1SeWeHOFZwbnRjdKCQGkDp-ws-I&usqp=CAU']
   },
   {
     id: '27',
     title: 'Elegant DJ',
     offers: '$1200 per event',
     discount: 'Discount for off-season bookings',
     description: 'Elegant music selection for weddings.',
     image: 'https://5.imimg.com/data5/IOS/Default/2023/3/LI/NR/CZ/53265260/product-jpeg-500x500.png',
     additionalImages: ['https://5.imimg.com/data5/SELLER/Default/2022/5/RT/LT/QG/150625398/dj-services-for-wedding-parties-500x500.jpeg', 'https://5.imimg.com/data5/IOS/Default/2024/3/400382589/VR/MA/YK/52807362/product-jpeg-250x250.png','https://5.imimg.com/data5/ANDROID/Default/2021/8/ZE/RP/IX/119313090/didcnikv4aegmle-jpg-500x500.jpg']
   },
   {
     id: '28',
     title: 'Ceremony DJ',
     offers: '$950 per event',
     discount: 'Free trial session available',
     description: 'Perfect for wedding ceremonies.',
     image: 'https://5.imimg.com/data5/SELLER/Default/2021/11/BD/HL/MM/62289581/dance-floor-setup-bd-dj-setup-500x500.jpeg',
     additionalImages: ['https://5.imimg.com/data5/ANDROID/Default/2021/2/FC/HU/XA/96540617/product-jpeg-500x500.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKLMmloRpTnbMJ0HCiQ5eucFyqsQ10zJi5s4OWGp7SkGljG3LV6HlGJqTRLpvaCwFGBVg&usqp=CAU','https://5.imimg.com/data5/SELLER/Default/2021/11/BD/HL/MM/62289581/dance-floor-setup-bd-dj-setup-500x500.jpeg']
   },
 ],
};



export default function Tap({ navigation }) {
  const [selectedDJType, setSelectedDJType] = useState('All');

  return (
    <View style={styles.container}>
      <View style={styles.dropdownContainer}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedDJType(value)}
          items={[
            { label: 'All DJs', value: 'All' },
            { label: 'Corporate DJs', value: 'Corporate' },
            { label: 'Wedding DJs', value: 'Wedding' },
          ]}
          style={pickerSelectStyles}
          placeholder={{ label: 'Select DJ Type...', value: null }}
        />
      </View>

      <ScrollView style={styles.scrollContainer}>
        {djOffers[selectedDJType].map(dj => (
          <TouchableOpacity
            key={dj.id}
            style={styles.card}
            onPress={() => navigation.navigate('Bookings', { dj })} // Navigate to Booking screen with DJ info
          >
            <Image source={{ uri: dj.image }} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{dj.title}</Text>
              <Text style={styles.cardOffers}>{dj.offers}</Text>
              <Text style={styles.cardDetails}>{dj.discount}</Text>
              <Text style={styles.cardDesc}>{dj.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#ffffff',
  },
  dropdownContainer: {
    zIndex: 1,
    marginBottom: 10,
  },
  scrollContainer: {
    flex: 1,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
    padding: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  cardImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  cardContent: {
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  cardOffers: {
    fontSize: 18,
    color: '#1a6bf0',
  },
  cardDetails: {
    fontSize: 16,
    color: '#555',
  },
});

// Custom styles for the RNPickerSelect component
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#1a6bf0',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 2,
    borderColor: '#1a6bf0',
    borderRadius: 10,
    color: 'black',
    paddingRight: 30,
  },
  cardDesc:{
    fontSize:12,
    color:'black',
  },
});
