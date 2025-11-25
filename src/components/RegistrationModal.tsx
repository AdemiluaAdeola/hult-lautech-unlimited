import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal = ({ isOpen, onClose }: RegistrationModalProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    teamName: "",
    teamLeadName: "",
    email: "",
    phone: "",
    ideaSummary: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.teamName.trim()) {
      newErrors.teamName = "Team name is required";
    } else if (formData.teamName.trim().length < 3) {
      newErrors.teamName = "Team name must be at least 3 characters";
    }

    if (!formData.teamLeadName.trim()) {
      newErrors.teamLeadName = "Team lead name is required";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email address";
    }

    const phoneRegex = /^[0-9+\s-()]{10,}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Invalid phone number";
    }

    if (!formData.ideaSummary.trim()) {
      newErrors.ideaSummary = "Idea summary is required";
    } else if (formData.ideaSummary.trim().length < 50) {
      newErrors.ideaSummary = "Idea summary must be at least 50 characters";
    } else if (formData.ideaSummary.trim().length > 500) {
      newErrors.ideaSummary = "Idea summary must not exceed 500 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast({
      title: "Registration Successful! 🎉",
      description: "Your team has been registered. Check your email for confirmation.",
    });

    setIsSubmitting(false);
    setFormData({
      teamName: "",
      teamLeadName: "",
      email: "",
      phone: "",
      ideaSummary: "",
    });
    setErrors({});
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-bold">
            Register Your Team
          </DialogTitle>
          <DialogDescription>
            Join the Hult Prize LAUTECH On-Campus Challenge 2025 - UNLIMITED. 
            Fill in the details below to get started.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 mt-4">
          {/* Team Name */}
          <div className="space-y-2">
            <Label htmlFor="teamName">
              Team Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="teamName"
              value={formData.teamName}
              onChange={(e) => handleChange("teamName", e.target.value)}
              placeholder="Enter your team name"
              className={errors.teamName ? "border-destructive" : ""}
              maxLength={100}
            />
            {errors.teamName && (
              <p className="text-sm text-destructive">{errors.teamName}</p>
            )}
          </div>

          {/* Team Lead Name */}
          <div className="space-y-2">
            <Label htmlFor="teamLeadName">
              Team Lead Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="teamLeadName"
              value={formData.teamLeadName}
              onChange={(e) => handleChange("teamLeadName", e.target.value)}
              placeholder="Full name of team lead"
              className={errors.teamLeadName ? "border-destructive" : ""}
              maxLength={100}
            />
            {errors.teamLeadName && (
              <p className="text-sm text-destructive">{errors.teamLeadName}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email">
              Email Address <span className="text-destructive">*</span>
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="your.email@example.com"
              className={errors.email ? "border-destructive" : ""}
              maxLength={255}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email}</p>
            )}
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone">
              Phone Number <span className="text-destructive">*</span>
            </Label>
            <Input
              id="phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleChange("phone", e.target.value)}
              placeholder="+234 XXX XXX XXXX"
              className={errors.phone ? "border-destructive" : ""}
              maxLength={20}
            />
            {errors.phone && (
              <p className="text-sm text-destructive">{errors.phone}</p>
            )}
          </div>

          {/* Idea Summary */}
          <div className="space-y-2">
            <Label htmlFor="ideaSummary">
              Idea Summary <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="ideaSummary"
              value={formData.ideaSummary}
              onChange={(e) => handleChange("ideaSummary", e.target.value)}
              placeholder="Briefly describe your idea for the UNLIMITED challenge (50-500 characters)"
              className={`min-h-[120px] ${errors.ideaSummary ? "border-destructive" : ""}`}
              maxLength={500}
            />
            <div className="flex justify-between items-center">
              <div>
                {errors.ideaSummary && (
                  <p className="text-sm text-destructive">{errors.ideaSummary}</p>
                )}
              </div>
              <p className="text-xs text-muted-foreground">
                {formData.ideaSummary.length}/500 characters
              </p>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex space-x-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              disabled={isSubmitting}
              className="flex-1"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="hero"
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Register Team"
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};
