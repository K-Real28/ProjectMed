using ProjectMed.Models.BaseModels;

namespace ProjectMed.Models
{
    public class Specialization : NamedBaseEnity
    {
        public List<SpecializationDoctor> SpecializationDoctors { get; set; } = new();
    }
}
