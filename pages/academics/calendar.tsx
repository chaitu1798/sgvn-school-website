import Layout from '../../components/Layout'

type Event = {
  month: string
  dateRange: string
  event: string
}

const academicEvents: Event[] = [
  { month: 'June', dateRange: '12 June', event: 'School Reopens for the Academic Year' },
  { month: 'July', dateRange: '1–15 July', event: 'Baseline Assessment for Students' },
  { month: 'August', dateRange: '15 August', event: 'Independence Day Celebration' },
  { month: 'September', dateRange: '5 September', event: 'Teacher’s Day Celebration' },
  { month: 'October', dateRange: '2 October', event: 'Gandhi Jayanti (Holiday)' },
  { month: 'October', dateRange: '1–7 October', event: 'Formative Assessment 1 (FA-1)' },
  { month: 'November', dateRange: '10–18 November', event: 'Summative Assessment 1 (SA-1)' },
  { month: 'December', dateRange: '23–27 December', event: 'Christmas Holidays' },
  { month: 'January', dateRange: '26 January', event: 'Republic Day' },
  { month: 'February', dateRange: '15–22 February', event: 'Formative Assessment 2 (FA-2)' },
  { month: 'March', dateRange: '15–25 March', event: 'Summative Assessment 2 (SA-2)' },
  { month: 'April', dateRange: '10 April', event: 'SSC Board Exams Start' },
  { month: 'May', dateRange: '1–31 May', event: 'Summer Vacation' },
]

export default function Calendar() {
  return (
    <Layout>
      <div className="py-10 px-4 md:px-8">
        <h1 className="text-4xl font-bold mb-6 text-center text-blue-800">
          SGVN School – Academic Calendar
        </h1>
        <p className="text-center mb-10 text-gray-600 max-w-2xl mx-auto">
          Below is the official academic calendar for SGVN School for the current academic year,
          following the Andhra Pradesh SSC Board guidelines. Please refer regularly for updates on
          assessments, holidays, and important school events.
        </p>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300 bg-white shadow-md rounded-xl overflow-hidden">
            <thead className="bg-blue-700 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Month</th>
                <th className="px-4 py-3 text-left">Date / Period</th>
                <th className="px-4 py-3 text-left">Event</th>
              </tr>
            </thead>
            <tbody>
              {academicEvents.map((event, index) => (
                <tr
                  key={index}
                  className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-gray-100`}
                >
                  <td className="px-4 py-3 font-medium text-gray-700">{event.month}</td>
                  <td className="px-4 py-3 text-gray-600">{event.dateRange}</td>
                  <td className="px-4 py-3 text-gray-700">{event.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  )
}
