using ProjectMed.Models.BaseModels;

namespace ProjectMed.Models
{
    public class PolyclinicDoctor : BaseEntity
    {
        public int? PolyclinicId { get; set; }
        public Polyclinic? Polyclinic { get; set; }

        public int? DoctorId { get; set; }
        public Doctor? Doctor { get; set; }
    }
}
