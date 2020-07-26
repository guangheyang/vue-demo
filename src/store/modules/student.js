export default {
    state: {
        studentList: [],
      },
      getters: {
        studentLength: state => state.studentList.length,
        studentJuveniles: state => state.studentList.filter(item => item.age < 18)
      }
}