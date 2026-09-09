import React from 'react';
import SEO from '../components/SEO';
import Home_1 from '../components/Home_1';
import Home_2 from '../components/Home_2';
import Home_3 from '../components/Home_3';
import PinnedCareStory from '../components/PinnedCareStory';
import Home_conatct from '../components/Home_conatct';

const Home = () => {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.angelassistancecare.com.au/#webpage",
        "url": "https://www.angelassistancecare.com.au/",
        "name": "Angel Assistance Care | Compassionate NDIS Support & Disability Care Australia",
        "isPartOf": {
          "@id": "https://www.angelassistancecare.com.au/#website"
        },
        "about": {
          "@id": "https://www.angelassistancecare.com.au/#organization"
        },
        "description": "Angel Assistance Care is a registered NDIS provider in Victoria, Australia offering compassionate disability support, daily personal activities, and community participation."
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.angelassistancecare.com.au/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What services does Angel Assistance Care provide?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Angel Assistance Care provides NDIS-supported services including assistance with daily personal activities, travel and transport arrangements, household tasks, development of daily living and life skills, group and centre-based activities, and innovative community participation."
            }
          },
          {
            "@type": "Question",
            "name": "Where does Angel Assistance Care operate in Australia?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Angel Assistance Care is based in Melton, Victoria, Australia and provides disability support services to participants across Melbourne and surrounding Victorian communities."
            }
          },
          {
            "@type": "Question",
            "name": "Is 24/7 care and nursing support available?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, Angel Assistance Care provides dedicated, compassionate support workers on-site 24/7, with a registered nurse on-call around the clock for continuous assistance."
            }
          },
          {
            "@type": "Question",
            "name": "How can I contact Angel Assistance Care regarding my NDIS plan?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "You can reach our coordinator team by phone at 0478 591 172 or by email at enquiries@angelassistancecare.co, or by submitting an enquiry form on our website."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <SEO
        title="Angel Assistance Care | Compassionate NDIS Support & Care Services Australia"
        description="Angel Assistance Care is a registered NDIS provider in Victoria, Australia. We deliver compassionate, person-centred disability support, daily living assistance, and community connection."
        keywords="Angel Assistance Care, Angel Assistance, Angel Assist, NDIS support services Australia, disability care Melton Victoria, NDIS provider Victoria, person-centred support"
        canonical="/"
        jsonLd={homeJsonLd}
      />
      
      {/* SCENE 01: Hero with 3D Particles */}
      <Home_1 />

      {/* SCENE 02: Mission & Moments Horizontal Drag Reel */}
      <Home_2 />

      {/* SCENE 03: Featured Services */}
      <Home_3 />

      {/* SCENE 04: Pinned Storytelling (Care & Lifestyle) */}
      <PinnedCareStory />

      {/* SCENE 05: Contact CTA & Form */}
      <Home_conatct />
    </>
  );
};

export default Home;
