using HospitalManagementSystem.Models;
using HospitalManagementSystem.Repository.DummyDetails;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.SqlServer.Query.Internal;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DummyDoctorDetailsController : ControllerBase
    {
        private readonly IDummyServices _context;
        public DummyDoctorDetailsController(IDummyServices context)
        {
            _context = context;
        }
        [Authorize(Roles ="Admin")]
        [HttpGet]
        public async Task<ActionResult<List<DoctorDummys>>> GetDoctorDetails()
        {
            try
            {
                return await _context.GetDoctorDetails();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }



        [HttpPost]
        public async Task<ActionResult<List<DoctorDummys>>> PostDoctor(DoctorDummys doctorDummys)
        {
            try
            {
                return await _context.PostDoctor(doctorDummys);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [Authorize(Roles ="Admin")]
        [HttpDelete]
        public async Task<ActionResult<string>> DeleteDoctor(string id)
        {
            try
            {
                return await _context.DeleteDoctor(id);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }
    }
}
