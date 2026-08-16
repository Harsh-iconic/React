
import Card from './components/Card'

const App = () => {

  const jobOpenings = [
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1iQY-eq57eJu8wDzsAvmPcYz2eHFXgxRsgYqR0ojp6A&s",
    name: "Google",
    datePosted: "2 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$45/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://yt3.googleusercontent.com/ytc/AIdro_kXVj3MGEZAiw5LFOtWMYpl9EHk45elb6SpEWfIigi3_3M=s900-c-k-c0x00ffffff-no-rj",
    name: "Microsoft",
    datePosted: "4 days ago",
    post: "Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$42/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTgXgL9SYqiVaD9h--z-KuMqTNfQAb03Br3-imi7Gw9UkrrM2OQ94U5B4&s=10",
    name: "Amazon",
    datePosted: "1 week ago",
    post: "Software Development Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$40/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVqHEvWv-5N4c71IXMSDxMHF1dSrqA7WNbtzeK1KC4ug&s=10",
    name: "Meta",
    datePosted: "5 days ago",
    post: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$48/hour",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    name: "Apple",
    datePosted: "3 days ago",
    post: "iOS Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$44/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThW3vszDScLtuavCM31FfcECi3KJ9-wo2HqnX1wB0ewQ&s",
    name: "Netflix",
    datePosted: "2 weeks ago",
    post: "Full Stack Engineer",
    tag1: "Full Time",
    tag2: "Senior Level",
    pay: "$55/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://yt3.googleusercontent.com/btm1_PK-7VRUr9GY2D0UV_2XfbUZPBjghyptjSO1crsfN86HyTYDWPmUbq7JxC3H0Lxe_s067nA=s900-c-k-c0x00ffffff-no-rj",
    name: "NVIDIA",
    datePosted: "6 days ago",
    post: "AI Software Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$50/hour",
    location: "Pune, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ262pFjl51YMhu9iihkLx9p4iJIMOLAtR0sRZXQBzdwQ&s",
    name: "IBM",
    datePosted: "3 weeks ago",
    post: "Cloud Software Engineer",
    tag1: "Full Time",
    tag2: "Junior Level",
    pay: "$35/hour",
    location: "Bengaluru, India"
  },
  {
    brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm96z6OBqt1KMz1KsChkOomoqK-Qx_8t4YNpGli0KYjw&s=10",
    name: "Salesforce",
    datePosted: "10 days ago",
    post: "MERN Stack Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    pay: "$38/hour",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://mma.prnewswire.com/media/565528/o_redbadge_digital_master.jpg?p=facebook",
    name: "Oracle",
    datePosted: "10 weeks ago",
    post: "Backend Software Engineer",
    tag1: "Part Time",
    tag2: "Senior Level",
    pay: "$46/hour",
    location: "Mumbai, India"
  }
];


  return (
    <div className='parent'>
      {jobOpenings.map(function(elem, idx){

        return <Card 
        company={elem.name} 
        post={elem.post} 
        date={elem.datePosted} 
        time={elem.tag1} 
        level={elem.tag2}
        pay={elem.pay}
        location={elem.location}
        brandLogo={elem.brandLogo}
        />
      })}
    </div>
  )
}

export default App

