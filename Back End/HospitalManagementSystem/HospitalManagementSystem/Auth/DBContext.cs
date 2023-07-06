using HospitalManagementSystem.Models;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Bware.Auth
{
    public class DBContext : IdentityDbContext<ApplicationUser>
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        {

        }

        public DbSet<TokenInfo> TokenInfo { get; set; }
        public DbSet<AppointmentDetail> AppointmentDetail { get; set; }
        public DbSet<DoctorDetail> DoctorDetail { get; set; }
        public DbSet<DoctorDummys> DoctorDummys { get; set;}
    }
}
