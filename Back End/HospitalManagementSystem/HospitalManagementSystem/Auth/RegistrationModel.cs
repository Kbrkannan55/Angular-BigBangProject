using HospitalManagementSystem.Models;
using System.ComponentModel.DataAnnotations;

namespace Bware.Auth
{
    public class RegistrationModel
    {
        [Required]
        public string? Name { get; set; }
        [Key]
        public string? Username { get; set; }
        [Required]
        public string? Email { get; set; }
        [Required]
        public string Roles { get; set; }=string.Empty;

        [Required]
        public string? Password { get; set; }
    }
}
