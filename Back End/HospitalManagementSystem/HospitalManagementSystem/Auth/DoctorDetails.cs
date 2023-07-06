using Bware.Auth;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Numerics;

namespace HospitalManagementSystem.Models
{
    public class DoctorDetail
    {
        [Key]
        public int? id { get; set; }

        [Required] 
        public string name { get; set; } = string.Empty;


        [Required]
        public string? Sex { get; set; }
        [Required]
        public string? Specialization { get; set; }
        [Required]
        public string? Experience { get; set; }
        [Required]
        public Int64? PhoneNumber { get; set; }

        public ICollection<AppointmentDetail> Appointments { get; set; } = new List<AppointmentDetail>();
    }
}
