using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace ProjectMed.Migrations
{
    /// <inheritdoc />
    public partial class DeliteColumn_SpecializationDoctors_Polyclinic : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_SpecializationDoctors_Polyclinics_PolyclinicId",
                table: "SpecializationDoctors");

            migrationBuilder.DropIndex(
                name: "IX_SpecializationDoctors_PolyclinicId",
                table: "SpecializationDoctors");

            migrationBuilder.DropColumn(
                name: "PolyclinicId",
                table: "SpecializationDoctors");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "PolyclinicId",
                table: "SpecializationDoctors",
                type: "integer",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_SpecializationDoctors_PolyclinicId",
                table: "SpecializationDoctors",
                column: "PolyclinicId");

            migrationBuilder.AddForeignKey(
                name: "FK_SpecializationDoctors_Polyclinics_PolyclinicId",
                table: "SpecializationDoctors",
                column: "PolyclinicId",
                principalTable: "Polyclinics",
                principalColumn: "Id");
        }
    }
}
