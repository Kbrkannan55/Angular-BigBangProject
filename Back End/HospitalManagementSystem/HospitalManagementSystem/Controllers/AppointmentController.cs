using HospitalManagementSystem.Models;
using HospitalManagementSystem.Repository.AppointmentServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AppointmentController : ControllerBase
    {
        private IAppointmentServices _context;

        public AppointmentController(IAppointmentServices context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<AppointmentDetail>>> GetAllAppointmentDetails()
        {
            try
            {
                return await _context.GetAllAppointmentDetails();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpPost]
        public async Task<ActionResult<List<AppointmentDetail>>> PostAppointmentDetails(AppointmentDetail appointmentDetail)
        {
            try
            {
                return await _context.PostAppointmentDetails(appointmentDetail);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [HttpGet("GetByDate")]
        public async Task<ActionResult<List<AppointmentDetail>>> GetByDate(string dates)
        {
            try
            {
                return await _context.GetByDate(dates);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}
