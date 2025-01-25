export const getFeaturedCards = (count) => {
  const allCards = [
    {
      id: 1,
      title: "Dark Magician Girl",
      image: "/img/all-slabs/Dark Magician Girl (2020) - The Lost Art Promotion (LART).jpg"
    },
    {
      id: 2,
      title: "Dark Magician Girl Ghost",
      image: "/img/all-slabs/Dark Magician Girl (Ghost Rare) - Ghosts From the Past The 2nd Haunting (GFP2).jpg"
    },
    {
      id: 3,
      title: "Dark Magician Girl Dragon Knight",
      image: "/img/all-slabs/Dark Magician Girl the Dragon Knight (Quarter Century Secret Rare) - Quarter Century Bonanza.jpg"
    },
    {
      id: 4,
      title: "Jeweled Lotus",
      image: "/img/all-slabs/Jeweled Lotus (Extended Art) - Commander Legends (CMR).jpg"
    },
    {
      id: 5,
      title: "Pikachu ex",
      image: "/img/all-slabs/Pikachu ex - 238191 - SV08 Surging Sparks (SV08).jpg"
    }
  ];

  return count ? allCards.slice(0, count) : allCards;
};