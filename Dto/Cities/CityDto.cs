using ProjectMed.Dto.Polyclinics;
using ProjectMed.Models;

namespace ProjectMed.Dto.Cities
{
    public class CityDto
    {
        public int? Id { get; set; }
        public string? Name { get; set; }

        public List<PolyclinicDto> Polyclinics { get; set; } = new();

    }
}
