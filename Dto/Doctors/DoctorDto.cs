namespace ProjectMed.Dto.Doctors
{
    public class DoctorDto
    {
        public int? Id { get; set; }
        public string? FullName { get; set; }
        public string? ShortInfo { get; set; }
        public string? FullInfo { get; set; }
        public uint? CostOfVisit { get; set; }
        public string? PhoneNumber { get; set; }
        public string? ExpOfSpec { get; set; }
        public string? Photo { get; set; }

        public List<int> SpecializationIds { get; set; }
        //public List<SpecializationDoctor> SpecializationDoctors { get; set; } = new();
        //public List<PolyclinicDoctor> PolyclinicDoctors { get; set; } = new();
    }
}
