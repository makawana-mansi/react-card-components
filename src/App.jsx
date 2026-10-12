import React from 'react'
import Card from './Componets/Card'

const App = () => {



  const profiles = [
    {
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      name: "Wade Wilson",
      role: "UI/UX designer",
      company: "Epic Coders",
      rate: "$55/hr",
      skill1: "UI",
      skill2: "UX",
      skill3: "photoshop",
      more: "+4",
      description: "Wade is a UI/UX designer with an impressive portfolio.",
      available: true
    },
    {
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      name: "Maria Petrescu",
      role: "Mobile designer",
      company: "Freelancer",
      rate: "$32/hr",
      skill1: "PHP",
      skill2: "android",
      skill3: "iOS",
      more: "+2",
      description: "Maria is an android and iOS developer.",
      available: false
    },
    {
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      name: "Alexandra Morgan",
      role: "Mobile designer",
      company: "Freelancer",
      rate: "$42/hr",
      skill1: "PHP",
      skill2: "android",
      skill3: "iOS",
      more: "+12",
      description: "Alexandra develops applications for mobile platforms.",
      available: false
    },
    {
      image: "https://randomuser.me/api/portraits/women/24.jpg",
      name: "Sophia Williams",
      role: "Frontend developer",
      company: "Web Studio",
      rate: "$44/hr",
      skill1: "HTML",
      skill2: "CSS",
      skill3: "JavaScript",
      more: "+3",
      description: "Sophia creates responsive and user-friendly websites.",
      available: true
    },
    {
      image: "https://randomuser.me/api/portraits/women/50.jpg",
      name: "Emma Brown",
      role: "UI designer",
      company: "Freelancer",
      rate: "$40/hr",
      skill1: "Figma",
      skill2: "UI",
      skill3: "Design",
      more: "+5",
      description: "Emma designs clean and modern user interfaces.",
      available: true
    },
    {
      image: "https://randomuser.me/api/portraits/men/45.jpg",
      name: "James Miller",
      role: "Web developer",
      company: "Tech Solutions",
      rate: "$30/hr",
      skill1: "React",
      skill2: "Node.js",
      skill3: "MongoDB",
      more: "+4",
      description: "James builds modern web applications.",
      available: false
    },
    {
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      name: "Oliver Smith",
      role: "Backend developer",
      company: "Code Masters",
      rate: "$48/hr",
      skill1: "Node.js",
      skill2: "Python",
      skill3: "SQL",
      more: "+6",
      description: "Oliver develops reliable backend systems and APIs.",
      available: true
    },
    {
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      name: "Ava Johnson",
      role: "Web designer",
      company: "Freelancer",
      rate: "$38/hr",
      skill1: "HTML",
      skill2: "CSS",
      skill3: "Figma",
      more: "+3",
      description: "Ava designs attractive and responsive websites.",
      available: false
    },
    {
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      name: "Noah Davis",
      role: "Full Stack developer",
      company: "Digital Works",
      rate: "$60/hr",
      skill1: "React",
      skill2: "Node.js",
      skill3: "MongoDB",
      more: "+7",
      description: "Noah builds full stack applications.",
      available: true
    },
    {
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      name: "Isabella Taylor",
      role: "App developer",
      company: "Freelancer",
      rate: "$50/hr",
      skill1: "React",
      skill2: "Android",
      skill3: "iOS",
      more: "+5",
      description: "Isabella creates mobile apps for different platforms.",
      available: true
    }
  ];


  return (
    <div className="parent">
      {profiles.map(function (i) {
        return (
          <Card img={i.image} rate={i.rate} name={i.name} skill1={i.skill1} skill2={i.skill2} skill3={i.skill3} more={i.more} company={i.company} role={i.role} description={i.description} />
        )
      })}
    </div>
  )
}

export default App