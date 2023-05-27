using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using ProjectMed.Data;
using ProjectMed.Dto.Cities;
using ProjectMed.Models;

namespace ProjectMed.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitiesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly IMapper _mapper;
        public CitiesController(ApplicationDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        //GET: 
        [HttpGet]
        [Route("GetCities")]
        public ActionResult<List<CityDto>> GetCities()
        {
            var cities = _context.Cities.ToList();
            var cityDtos = _mapper.Map<List<CityDto>>(cities);

            return cityDtos;
        }

        // GET: /cities/5
        [HttpGet]
        [Route("GetCityById/{id}")]
        public ActionResult<CityDto> GetCityById(int id)
        {
            var city = _context.Cities.FirstOrDefault(c => c.Id == id);

            if (city == null) return NotFound();

            var cityDto = _mapper.Map<CityDto>(city);

            return cityDto;
        }

        // POST: /cities
        [HttpPost]
        [Route("CreateCity")]
        public ActionResult<CityDto> CreateCity(CityDto cityDto)
        {
            var city = _mapper.Map<City>(cityDto);

            _context.Cities.Add(city);
            _context.SaveChanges();

            return cityDto;
        }

        // PUT: /cities/5
        [HttpPut]
        [Route("UpdateCityById/{id}")]
        public ActionResult<CityDto> UpdateCityById(int id, CityDto cityDto)
        {
            var city = _context.Cities.FirstOrDefault(c => c.Id == id);

            if (city == null) return NotFound();

            _mapper.Map(cityDto, city);

            _context.SaveChanges();

            return cityDto;
        }

        // DELETE: /cities/5
        [HttpDelete]
        [Route("DeleteCityById/{id}")]
        public ActionResult DeleteCityById(int id)
        {
            var city = _context.Cities.FirstOrDefault(c => c.Id == id);

            if (city == null) return NotFound();

            var polyclinics = _context.Polyclinics.Where(c => c.CityId == id).ToList();

            if (polyclinics.Any())
            {
                foreach (var item in polyclinics)
                {
                    item.CityId = null;
                }
                _context.UpdateRange(polyclinics);
                _context.SaveChanges();
            }

            _context.Cities.Remove(city);
            _context.SaveChanges();

            return Ok();
        }
    }
}
