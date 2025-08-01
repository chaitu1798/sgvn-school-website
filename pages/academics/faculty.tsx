import Layout from '../../components/Layout'

type FacultyMember = {
  name: string
  degree: string
  subject: string
  imageUrl: string
}

const facultyMembers: FacultyMember[] = [
  {
    name: 'Mrs. Anjali Rao',
    degree: 'B.Sc. (Mathematics)',
    subject: 'Mathematics',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,1',
  },
  {
    name: 'Mr. Rajesh Kumar',
    degree: 'B.A. (English)',
    subject: 'English',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,2',
  },
  {
    name: 'Ms. Sneha Patel',
    degree: 'B.Ed. (Biology)',
    subject: 'Biology',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,3',
  },
  {
    name: 'Mr. Arvind Singh',
    degree: 'B.Sc. (Physics)',
    subject: 'Physics',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,4',
  },
  {
    name: 'Mrs. Lakshmi Devi',
    degree: 'B.Com.',
    subject: 'Commerce',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,5',
  },
  {
    name: 'Mr. Naveen Sharma',
    degree: 'B.A. (History)',
    subject: 'Social Studies',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,6',
  },
  {
    name: 'Ms. Kavita Mehra',
    degree: 'B.Ed. (Chemistry)',
    subject: 'Chemistry',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,7',
  },
  {
    name: 'Mr. Vikram Rao',
    degree: 'B.Sc. (Computer Science)',
    subject: 'Computer Science',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,8',
  },
  {
    name: 'Mrs. Deepa Iyer',
    degree: 'B.A. (Hindi)',
    subject: 'Hindi',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,9',
  },
  {
    name: 'Mr. Karthik Reddy',
    degree: 'B.P.Ed.',
    subject: 'Physical Education',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,10',
  },
  {
    name: 'Ms. Pooja Jain',
    degree: 'B.A. (Telugu)',
    subject: 'Telugu',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,11',
  },
  {
    name: 'Mr. Sanjay Deshmukh',
    degree: 'B.Sc. (Zoology)',
    subject: 'Science',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,12',
  },
  {
    name: 'Mrs. Shalini Verma',
    degree: 'B.A. (Sanskrit)',
    subject: 'Sanskrit',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,13',
  },
  {
    name: 'Mr. Arjun Das',
    degree: 'B.Tech. (Mechanical)',
    subject: 'Vocational Studies',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,14',
  },
  {
    name: 'Ms. Neha Joshi',
    degree: 'B.A. (Art)',
    subject: 'Drawing',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,15',
  },
  {
    name: 'Mr. Ajay Bhatt',
    degree: 'B.Music',
    subject: 'Music',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,16',
  },
  {
    name: 'Mrs. Rekha Sharma',
    degree: 'B.Ed. (Geography)',
    subject: 'Geography',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,17',
  },
  {
    name: 'Mr. Rohit Menon',
    degree: 'B.A. (Philosophy)',
    subject: 'Value Education',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,18',
  },
  {
    name: 'Ms. Swathi Reddy',
    degree: 'B.Sc. (Botany)',
    subject: 'Environmental Science',
    imageUrl: 'https://source.unsplash.com/200x200/?woman,teacher,19',
  },
  {
    name: 'Mr. Vivek Anand',
    degree: 'BCA',
    subject: 'IT and Coding',
    imageUrl: 'https://source.unsplash.com/200x200/?man,teacher,20',
  },
]

export default function Faculty() {
  return (
    <Layout>
      <div className="py-10 px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-6 text-blue-800 text-center">
          Meet Our Faculty
        </h1>
        <p className="text-center mb-10 text-gray-600">
          Our team of experienced and dedicated teachers across subjects and grades.
        </p>

        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {facultyMembers.map((faculty, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <img
                src={faculty.imageUrl}
                alt={faculty.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">
                  {faculty.name}
                </h2>
                <p className="text-sm text-gray-600">{faculty.degree}</p>
                <p className="text-sm text-blue-700 font-medium">{faculty.subject}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  )
}
