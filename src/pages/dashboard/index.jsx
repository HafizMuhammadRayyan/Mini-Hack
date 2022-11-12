import Navbar from '../../components/navbar'
import './index.css'

const classAdd = () => {

}

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <Navbar />

      <div className="dashboardBody">
        <h1>Class Adding</h1>
        <form onSubmit={classAdd}>

          <div className="inputFields">
            <label htmlFor="classStartTime">Class start</label>
            <input type="time" id="classStartTime" />
          </div>

          <div className="inputFields">
            <label htmlFor="classEndTime">Class End</label>
            <input type="time" id="classEndTime" />
          </div>

          <div className="inputFields">
            <label htmlFor="scheduleClasses">Schedule of classes</label>
            <input type="text" id="scheduleClasses" />
          </div>

          <div className="inputFields">
            <label htmlFor="teacherName">Teacher Name</label>
            <input type="text" id="teacherName" />
          </div>

          <div className="inputFields">
            <label htmlFor="sectionName">Section name</label>
            <input type="text" id="sectionName" />
          </div>

          <div className="inputFields">
            <label htmlFor="courseName">Course Name</label>
            <input type="text" id="courseName" />
          </div>

          <div className="inputFields">
            <label htmlFor="batchNumber">Batch Number</label>
            <input type="Number" id="batchNumber" />
          </div>

          {/* <div className="inputFields">
            <label htmlFor="batchNumber">Batch Number</label>
            <input type="button" />
          </div> */}

        </form>
      </div>

    </div >
  )
}

export default Dashboard
