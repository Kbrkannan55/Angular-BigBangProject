using Bware.Auth;
using HospitalManagementSystem.Models;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.VisualBasic;

namespace HospitalManagementSystem.Repository.DoctorDetailServices
{
    public class DoctorDetailServices : IDoctorDetailServices
    {
        private DBContext _context;
        public DoctorDetailServices(DBContext context)
        {
            _context = context;
        }

        public async Task<List<DoctorDetail>> GetAllDoctorDetails()
        {
            var details = await _context.DoctorDetail.ToListAsync();
            return details;
        }

        public async Task<string> DeleteDoctor(int id)
        {
            if (id == null)
                throw new Exception("Invalid");
            var details=await _context.DoctorDetail.FirstOrDefaultAsync(x=>x.id==id);
            _context.Remove(details);
            _context.SaveChanges();
            return "Deleted";
        }

        public async Task<List<DoctorDetail>> PostDoctorDetails(DoctorDetail doctorDetail)
        {
            if (doctorDetail == null)
                throw new Exception("Invalid");
            var details = _context.DoctorDetail.Add(doctorDetail);
            _context.SaveChanges();
            return await _context.DoctorDetail.ToListAsync();
        }


        public async Task<List<DoctorDetail>> PutDoctorDetails(int id, DoctorDetail doctorDetail)
        {
            var details=await _context.DoctorDetail.FirstOrDefaultAsync(x=>x.id==id);
            details.name = doctorDetail.name;
            details.Experience = doctorDetail.Experience;
            details.Specialization= doctorDetail.Specialization;
            details.PhoneNumber= doctorDetail.PhoneNumber;
            _context.SaveChanges();
            return await _context.DoctorDetail.ToListAsync();
        }
    }
}
