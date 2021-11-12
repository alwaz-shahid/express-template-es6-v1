import { ROLE } from "../../data";

export function canViewProject(user, project) {
    console.log(user)
    return (
        user.role = ROLE.ADMIN || project.userId === user.id
    )
}
export function scopedProjects(user, projects) {
    if (user.role == ROLE.ADMIN) {
        return projects
    }
    return projects.filter(project => project.userId === user.id)
}

// if (!user) {
//     return false;
//   }
//   if (user.isAdmin) {
//     return true;
//   }
//   if (project.ownerId === user.id) {
//     return true;
//   }
//   if (project.collaborators.some(c => c.userId === user.id)) {
//     return true;
//   }
//   return false;