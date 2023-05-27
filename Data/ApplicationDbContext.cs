using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ProjectMed.Models;

namespace ProjectMed.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {
            Database.EnsureCreated();
        }
        public DbSet<City> Cities { get; set; }
        public DbSet<Doctor> Doctors { get; set; }
        public DbSet<Polyclinic> Polyclinics { get; set; }
        public DbSet<Specialization> Specializations { get; set; }
        public DbSet<PolyclinicDoctor> PolyclinicDoctors { get; set; }
        public DbSet<SpecializationDoctor> SpecializationDoctors { get; set; }
    }
}