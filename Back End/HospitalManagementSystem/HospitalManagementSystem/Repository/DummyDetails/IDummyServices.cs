using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Repository.DummyDetails
{
    public interface IDummyServices
    {
        Task<List<DoctorDummys>> GetDoctorDetails();
        Task<List<DoctorDummys>> PostDoctor(DoctorDummys doctorDummys);
        Task<string> DeleteDoctor(string id);
    }
}
