using Bware.Auth;
using HospitalManagementSystem.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace HospitalManagementSystem.Repository.DummyDetails
{
    public class DummyServices : IDummyServices
    {
        private DBContext _context;
        public DummyServices(DBContext context)
        {
            _context = context;
        }

        public async Task<List<DoctorDummys>> GetDoctorDetails()
        {
            var details = await _context.DoctorDummys.ToListAsync();
            return details;
        }

        public async Task<List<DoctorDummys>> PostDoctor(DoctorDummys doctorDummys)
        {
            _context.DoctorDummys.Add(doctorDummys);
            _context.SaveChanges();
            return await _context.DoctorDummys.ToListAsync();
        }

       public async Task<string> DeleteDoctor(string id)
        {
            if (id == null)
                throw new Exception("Invalid");
            var details = _context.DoctorDummys.FirstOrDefault(x=>x.Username==id);
            _context.Remove(details);
            _context.SaveChanges();
            return "Deleted";
        }

    }
}
