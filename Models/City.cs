using ProjectMed.Models.BaseModels;

namespace ProjectMed.Models
{
    public class City : NamedBaseEnity
    {
        public List<Polyclinic> Polyclinics { get; set; } = new();
    }
}
