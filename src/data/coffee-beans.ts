import type { CoffeeBean } from "@/types"

export const coffeeBeans: CoffeeBean[] = [
  {
    id: "ethiopian-yirgacheffe",
    name: "Ethiopia Yirgacheffe",
    origin: "Yirgacheffe, Etiyopya",
    roastLevel: "Light",
    flavorNotes: ["Çiçeksi", "Bergamot", "Limon", "Jasmin"],
    description:
      "Yirgacheffe'nin yüksek rakımlı bölgelerinde yetiştirilen bu kahve çekirdekleri, benzersiz çiçeksi aromalar ve narince asidite sunar.",
    image: "/ethiopia_yirgacheffe.png",
    altitude: "1,750 - 2,200 metre",
    process: "Yıkanmış",
    characteristics: ["Asitli", "Çiçeksi", "Hafif Gövdeli"],
  },
  {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    origin: "Antigua Valley, Guatemala",
    roastLevel: "Medium",
    flavorNotes: ["Çikolata", "Karamel", "Turunçgil", "Badem"],
    description:
      "Antigua Vadisi'nin volkanik topraklarında yetiştirilen bu çekirdekler, zengin çikolata notaları ve yumuşak bir asidite sunar.",
    image: "/guetemala_antigua.png",
    altitude: "1,500 - 1,700 metre",
    process: "Yıkanmış",
    characteristics: ["Dengeli", "Çikolatalı", "Orta Gövdeli"],
  },
  {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    origin: "Sumatra, Endonezya",
    roastLevel: "Dark",
    flavorNotes: ["Baharat", "Toprak", "Tütün", "Bitter Çikolata"],
    description:
      "Endonezya'nın Sumatra adasından gelen bu çekirdekler, karakteristik yoğun ve topraksı aromalarıyla tanınır.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "900 - 1,500 metre",
    process: "Yarı Yıkanmış",
    characteristics: ["Yoğun", "Topraksı", "Tam Gövdeli"],
  },
  {
    id: "kenya-aa",
    name: "Kenya AA",
    origin: "Kenya",
    roastLevel: "Medium",
    flavorNotes: ["Blackcurrant", "Sitrus", "Çiçek", "Baharatlar"],
    description: "Kenya'nın yüksek bölgelerinde yetiştirilen bu çekirdekler, canlı asidite ve karmaşık aromalar sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,700 - 2,000 metre",
    process: "Yıkanmış",
    characteristics: ["Asitli", "Meyvemsi", "Orta Gövdeli"],
  },
  {
    id: "brazil-santos",
    name: "Brazil Santos",
    origin: "Santos, Brezilya",
    roastLevel: "Medium",
    flavorNotes: ["Fındık", "Çikolata", "Karamel", "Hafif Meyve"],
    description: "Brezilya'nın Santos bölgesinden gelen bu çekirdekler, yumuşak içimli ve dengeli bir profil sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "800 - 1,200 metre",
    process: "Doğal",
    characteristics: ["Yumuşak", "Fındıksı", "Orta Gövdeli"],
  },
  {
    id: "costa-rica-tarrazu",
    name: "Costa Rica Tarrazu",
    origin: "Tarrazu, Kosta Rika",
    roastLevel: "Medium-Light",
    flavorNotes: ["Elma", "Bal", "Bergamot", "Fındık"],
    description: "Kosta Rika'nın Tarrazu bölgesinden gelen bu çekirdekler, parlak asidite ve temiz bir fincan sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,200 - 1,800 metre",
    process: "Yıkanmış",
    characteristics: ["Asitli", "Meyvemsi", "Hafif Gövdeli"],
  },
  {
    id: "colombia-supremo",
    name: "Colombia Supremo",
    origin: "Huila, Kolombiya",
    roastLevel: "Medium",
    flavorNotes: ["Karamel", "Fındık", "Kırmızı Elma", "Çikolata"],
    description: "Kolombiya'nın Huila bölgesinden gelen bu çekirdekler, dengeli ve yumuşak bir içim sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,200 - 1,800 metre",
    process: "Yıkanmış",
    characteristics: ["Dengeli", "Yumuşak", "Orta Gövdeli"],
  },
  {
    id: "jamaica-blue-mountain",
    name: "Jamaica Blue Mountain",
    origin: "Blue Mountains, Jamaika",
    roastLevel: "Medium",
    flavorNotes: ["Çikolata", "Fındık", "Hafif Baharatlar", "Narenciye"],
    description: "Jamaika'nın Blue Mountains bölgesinden gelen bu nadir çekirdekler, pürüzsüz ve lüks bir içim sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,500 - 2,000 metre",
    process: "Yıkanmış",
    characteristics: ["Pürüzsüz", "Dengeli", "Hafif Asitli"],
  },
  {
    id: "hawaiian-kona",
    name: "Hawaiian Kona",
    origin: "Kona, Hawaii",
    roastLevel: "Medium",
    flavorNotes: ["Fındık", "Karamel", "Bal", "Hafif Meyvemsi"],
    description: "Hawaii'nin Kona bölgesinden gelen bu çekirdekler, zengin ve pürüzsüz bir içim sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "600 - 900 metre",
    process: "Yıkanmış",
    characteristics: ["Pürüzsüz", "Zengin", "Hafif Tatlı"],
  },
  {
    id: "tanzania-peaberry",
    name: "Tanzania Peaberry",
    origin: "Kilimanjaro, Tanzanya",
    roastLevel: "Medium",
    flavorNotes: ["Blackcurrant", "Çikolata", "Bergamot", "Baharatlar"],
    description:
      "Tanzanya'nın Kilimanjaro bölgesinden gelen bu nadir peaberry çekirdekleri, yoğun ve karmaşık bir lezzet profili sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,400 - 1,800 metre",
    process: "Yıkanmış",
    characteristics: ["Yoğun", "Karmaşık", "Asitli"],
  },
  {
    id: "india-monsooned-malabar",
    name: "India Monsooned Malabar",
    origin: "Malabar Sahili, Hindistan",
    roastLevel: "Dark",
    flavorNotes: ["Baharat", "Tütün", "Toprak", "Kakao"],
    description:
      "Hindistan'ın Malabar sahilinde özel bir işlemden geçen bu çekirdekler, düşük asidite ve yoğun bir gövde sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "900 - 1,500 metre",
    process: "Monsooned",
    characteristics: ["Düşük Asitli", "Yoğun", "Baharatlı"],
  },
  {
    id: "yemen-mocha",
    name: "Yemen Mocha",
    origin: "Yemen",
    roastLevel: "Light-Medium",
    flavorNotes: ["Çikolata", "Kuru Meyve", "Baharatlar", "Tütün"],
    description:
      "Yemen'in tarihi kahve bölgelerinden gelen bu çekirdekler, karmaşık ve egzotik bir lezzet profili sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,200 - 2,100 metre",
    process: "Doğal",
    characteristics: ["Karmaşık", "Egzotik", "Orta Gövdeli"],
  },
  {
    id: "honduras-marcala",
    name: "Honduras Marcala",
    origin: "Marcala, Honduras",
    roastLevel: "Medium",
    flavorNotes: ["Kakao", "Karamel", "Turunçgil", "Bal"],
    description: "Marcala bölgesinin yüksek rakımlarında yetiştirilen bu çekirdekler, zengin kakao ve karamel aromalarıyla öne çıkar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,200 - 1,700 metre",
    process: "Yıkanmış",
    characteristics: ["Tatlı", "Dengeli", "Orta Gövdeli"]
},
{
    id: "panama-geisha",
    name: "Panama Geisha",
    origin: "Boquete, Panama",
    roastLevel: "Light",
    flavorNotes: ["Çiçeksi", "Jasmin", "Narenciye", "Mango"],
    description: "Dünyanın en ünlü kahve çekirdeklerinden biri olan Panama Geisha, kompleks ve çiçeksi aromalarıyla bilinir.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,400 - 1,900 metre",
    process: "Yıkanmış",
    characteristics: ["Asitli", "Çiçeksi", "Hafif Gövdeli"]
},
{
    id: "yemen-mocha-matari",
    name: "Yemen Mocha Matari",
    origin: "Bani Matar, Yemen",
    roastLevel: "Dark",
    flavorNotes: ["Baharat", "Kakao", "Tütün", "Kuru Meyve"],
    description: "Yemen'in Bani Matar bölgesinden gelen bu çekirdekler, yoğun baharat ve kakao notalarıyla tarihi bir lezzet sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,400 - 2,000 metre",
    process: "Doğal",
    characteristics: ["Yoğun", "Baharatlı", "Tam Gövdeli"]
},
{
    id: "tanzania-peaberry",
    name: "Tanzania Peaberry",
    origin: "Kilimanjaro, Tanzanya",
    roastLevel: "Medium",
    flavorNotes: ["Sitrus", "Meyvemsi", "Beyaz Çikolata", "Çiçeksi"],
    description: "Kilimanjaro bölgesinden gelen özel Peaberry çekirdekleri, canlı asidite ve tatlı meyvemsi notalara sahiptir.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,400 - 1,800 metre",
    process: "Yıkanmış",
    characteristics: ["Asitli", "Tatlı", "Hafif Gövdeli"]
},
{
    id: "peru-chanchamayo",
    name: "Peru Chanchamayo",
    origin: "Chanchamayo, Peru",
    roastLevel: "Medium-Light",
    flavorNotes: ["Bal", "Kakao", "Fındık", "Meyvemsi"],
    description: "Peru'nun Chanchamayo vadisinde yetişen bu çekirdekler, dengeli tat profili ve hafif tatlılığıyla bilinir.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "1,200 - 1,800 metre",
    process: "Yıkanmış",
    characteristics: ["Dengeli", "Tatlı", "Orta Gövdeli"]
},
{
    id: "mexico-chiapas",
    name: "Mexico Chiapas",
    origin: "Chiapas, Meksika",
    roastLevel: "Medium",
    flavorNotes: ["Çikolata", "Ceviz", "Bal", "Baharat"],
    description: "Chiapas bölgesinde yetişen bu kahve, çikolata ve ceviz notalarıyla yumuşak ve dengeli bir tat sunar.",
    image: "/placeholder.svg?height=400&width=400",
    altitude: "900 - 1,500 metre",
    process: "Yıkanmış",
    characteristics: ["Dengeli", "Orta Gövdeli", "Hafif Tatlı"]
}
]

