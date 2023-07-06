using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HospitalManagementSystem.Models
{
    public class AppointmentDetail
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        [Required]
        public string? PatientName { get; set; }
        [Required]
        public string? Sex { get; set; }
        [Required]
        public string? date { get; set; }

        [ForeignKey("Id")]
        public int? DoctorId { get; set; }

/*
        public ICollection<DoctorDetails> DoctorDetails { get; set; } = new List<DoctorDetails>();*/


    }
}
