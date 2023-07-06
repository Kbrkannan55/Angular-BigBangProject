using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace HospitalManagementSystem.Migrations
{
    /// <inheritdoc />
    public partial class HospitalDBCreat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UsernameDoctor",
                table: "DoctorDetail");

            migrationBuilder.AddColumn<string>(
                name: "name",
                table: "DoctorDetail",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "name",
                table: "DoctorDetail");

            migrationBuilder.AddColumn<string>(
                name: "UsernameDoctor",
                table: "DoctorDetail",
                type: "nvarchar(max)",
                nullable: true);
        }
    }
}
