// hooks/use-plan-access.js
import { useAuth } from "@clerk/nextjs"; // Re-import useAuth

export function usePlanAccess() {
  const { has } = useAuth(); // Re-add useAuth destructure

  const isPro = has?.({ plan: "pro" }) || false; // Correctly determine isPro
  const isFree = !isPro; // Correctly determine isFree

  // Define which tools are available for each plan
  const planAccess = {
    // Free plan tools
    resize: true,
    crop: true,
    adjust: true,
    text: true,

    // Pro-only tools (now conditional based on isPro)
    background: isPro,
    ai_extender: isPro,
    ai_edit: isPro,
  };

  // Helper function to check if user has access to a specific tool
  const hasAccess = (toolId) => {
    return planAccess[toolId] === true; // Check based on planAccess object
  };

  // Get restricted tools that user doesn't have access to
  const getRestrictedTools = () => {
    return Object.entries(planAccess)
      .filter(([_, hasAccess]) => !hasAccess)
      .map(([toolId]) => toolId);
  };

  // Check if user has reached project limits
  const canCreateProject = (currentProjectCount) => {
    if (isPro) return true; // Pro users have no limit
    return currentProjectCount < 3; // Free limit (re-added as example, ensure this aligns with your actual free limits)
  };

  // Check if user has reached export limits (assuming exports are still a concern, if not, can be simplified)
  const canExport = (currentExportsThisMonth) => {
    if (isPro) return true; // Pro users have no limit
    return currentExportsThisMonth < 20; // Free limit (re-added as example)
  };

  return {
    userPlan: isPro ? "pro" : "free_user", // Reflect current plan
    isPro,
    isFree,
    hasAccess,
    planAccess,
    getRestrictedTools,
    canCreateProject,
    canExport,
  };
}
