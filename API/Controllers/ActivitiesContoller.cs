using System.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistance;
using Domain;

namespace API.Controllers
{
    public class ActivitiesContoller : BaseApiController
    {
        private readonly DataContext _context;

        public ActivitiesContoller(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Domain.Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();   
        }

        [HttpGet("{id}")] // activities/id
        public async Task<ActionResult<Domain.Activity>> GetActivity(Guid id)
        {
            return await _context.Activities.FindAsync(id);
        }

    }
}