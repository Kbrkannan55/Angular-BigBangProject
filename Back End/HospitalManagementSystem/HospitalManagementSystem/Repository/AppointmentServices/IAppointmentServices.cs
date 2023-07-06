using HospitalManagementSystem.Models;

namespace HospitalManagementSystem.Repository.AppointmentServices
{
    public interface IAppointmentServices
    {
        Task<List<AppointmentDetail>> GetAllAppointmentDetails();
        Task<List<AppointmentDetail>> PostAppointmentDetails(AppointmentDetail appointmentDetail);
        Task<List<AppointmentDetail>> GetByDate(string dates);
    }
}
