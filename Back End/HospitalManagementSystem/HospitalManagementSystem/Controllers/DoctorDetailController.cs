using Azure.Core;
using HospitalManagementSystem.Models;
using HospitalManagementSystem.Repository.DoctorDetailServices;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.VisualBasic;

namespace HospitalManagementSystem.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
 
    public class DoctorDetailController : ControllerBase
    {
        private readonly IDoctorDetailServices _context;
        public DoctorDetailController(IDoctorDetailServices context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<DoctorDetail>>> GetAllDoctorDetails()
        {
            try
            {
                return await _context.GetAllDoctorDetails();
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }

        }
        [Authorize(Roles = "Admin")]
        [HttpPost]
        public async Task<ActionResult<List<DoctorDetail>>> PostDoctorDetails(DoctorDetail doctorDetail)
        {
            try {
                return await _context.PostDoctorDetails(doctorDetail);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

        [Authorize(Roles = "Admin")]
        [HttpDelete]
        public async Task<ActionResult<string>> DeleteDoctor(int id)
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

        [Authorize(Roles ="Admin")]
        [HttpPut]
        public async Task<ActionResult<List<DoctorDetail>>> PutDoctorDetails(int id,DoctorDetail doctorDetail)
        {
            try
            {
                return await _context.PutDoctorDetails(id, doctorDetail);
            }
            catch (Exception ex)
            {
                return NotFound(ex.Message);
            }
        }

    }
}
