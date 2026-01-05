"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export default function Exercise3() {
  const [education, setEducation] = useState([
    { school: "", degree: "", year: "" },
  ]);

  const [errors, setErrors] = useState<any>({});
  const [submitted, setSubmitted] = useState(false);

  const addEducation = () => {
    setEducation([...education, { school: "", degree: "", year: "" }]);
  };

  const removeEducation = (index: number) => {
    const newEd = [...education];
    newEd.splice(index, 1);
    setEducation(newEd);
  };

  const handleChange = (index: number, field: string, value: string) => {
    const newEd = [...education];
    (newEd as any)[index][field] = value;
    setEducation(newEd);
  };

  const validate = () => {
    let newErrors: any = {};

    education.forEach((item, index) => {
      const itemErrors: any = {};

      if (!item.school.trim()) itemErrors.school = "Vui lòng nhập trường!";
      if (!item.degree.trim()) itemErrors.degree = "Vui lòng nhập bằng cấp!";
      if (!item.year.trim()) itemErrors.year = "Vui lòng nhập năm tốt nghiệp!";
      else if (!/^[0-9]{4}$/.test(item.year))
        itemErrors.year = "Năm không hợp lệ!";

      if (Object.keys(itemErrors).length > 0) {
        newErrors[index] = itemErrors;
      }
    });

    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Submitted education:", education);
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-4 max-w-3xl">
      <h2 className="text-2xl font-bold">Exercise 3: Dynamic Form Fields</h2>

      <p className="text-sm text-muted-foreground">
        Form với các trường nhập liệu động, cho phép thêm/xóa nhiều mục học vấn
      </p>

      {submitted && (
        <p className="text-green-600 text-sm">
          Lưu thông tin học vấn thành công!
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {education.map((item, index) => (
          <div
            key={index}
            className="p-4 border bg-blue-50 rounded-lg space-y-3"
          >
            <div className="flex justify-between">
              <p className="font-semibold">Học vấn #{index + 1}</p>

              {education.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeEducation(index)}
                  className="text-red-500"
                >
                  ✖
                </button>
              )}
            </div>

            {/* School */}
            <div className="space-y-1">
              <Input
                placeholder="Tên trường"
                value={item.school}
                onChange={(e) =>
                  handleChange(index, "school", e.target.value)
                }
                className={
                  errors[index]?.school ? "border-red-500" : undefined
                }
              />
              {errors[index]?.school && (
                <p className="text-red-500 text-sm">
                  {errors[index].school}
                </p>
              )}
            </div>

            {/* Degree */}
            <div className="space-y-1">
              <Input
                placeholder="Bằng cấp"
                value={item.degree}
                onChange={(e) =>
                  handleChange(index, "degree", e.target.value)
                }
                className={
                  errors[index]?.degree ? "border-red-500" : undefined
                }
              />
              {errors[index]?.degree && (
                <p className="text-red-500 text-sm">
                  {errors[index].degree}
                </p>
              )}
            </div>

            {/* Year */}
            <div className="space-y-1">
              <Input
                placeholder="Năm tốt nghiệp"
                value={item.year}
                onChange={(e) =>
                  handleChange(index, "year", e.target.value)
                }
                className={errors[index]?.year ? "border-red-500" : undefined}
              />
              {errors[index]?.year && (
                <p className="text-red-500 text-sm">
                  {errors[index].year}
                </p>
              )}
            </div>
          </div>
        ))}

        {/* Add Button */}
        <div className="border rounded-lg py-2 text-center">
          <button
            type="button"
            onClick={addEducation}
            className="text-blue-600"
          >
            + Thêm học vấn
          </button>
        </div>

        {/* Submit */}
        <Button type="submit">Lưu thông tin</Button>
      </form>
    </div>
  );
}
