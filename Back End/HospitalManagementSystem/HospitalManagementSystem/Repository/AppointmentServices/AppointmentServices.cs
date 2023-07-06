using Azure.Core;
using Bware.Auth;
using HospitalManagementSystem.Models;
using Microsoft.EntityFrameworkCore;

namespace HospitalManagementSystem.Repository.AppointmentServices
{
    public class AppointmentServices :IAppointmentServices
    {
        private DBContext _context;
        public AppointmentServices(DBContext context)
        {
            _context = context;
        }
        public async Task<List<AppointmentDetail>> GetAllAppointmentDetails()
        {
            var details = await _context.AppointmentDetail.ToListAsync();
            return details;
        }

        public async Task<List<AppointmentDetail>> PostAppointmentDetails(AppointmentDetail appointmentDetail)
        {
            var add =  _context.Add(appointmentDetail);
            await _context.SaveChangesAsync();
            return await _context.AppointmentDetail.ToListAsync();
            
        }

        public async Task<List<AppointmentDetail>> GetByDate(string dates)
        {
            var da=await _context.AppointmentDetail.Where(d=>d.date== dates).ToListAsync();
            return da;

        }

    }
}
