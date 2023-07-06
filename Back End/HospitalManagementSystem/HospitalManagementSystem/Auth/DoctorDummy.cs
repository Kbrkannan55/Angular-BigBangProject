using System.ComponentModel.DataAnnotations;

namespace HospitalManagementSystem.Models
{
    public class DoctorDummys
    {
        [Required]
        public string? Name { get; set; }
        [Key]
        public string? Username { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string? Roles { get; set; }
        [Required]
        public string? Password { get; set; }

    }
}
