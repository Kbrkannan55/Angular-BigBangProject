

using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Repository.DoctorDetailServices
{
    public interface IDoctorDetailServices
    {
        Task<List<DoctorDetail>> GetAllDoctorDetails();
        Task<string> DeleteDoctor(int id);
        Task<List<DoctorDetail>> PostDoctorDetails(DoctorDetail doctorDetail);
        Task<List<DoctorDetail>> PutDoctorDetails(int id, DoctorDetail doctorDetail);
    }
}
